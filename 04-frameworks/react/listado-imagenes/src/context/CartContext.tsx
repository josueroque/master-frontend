import React, { useReducer } from "react";
import { cars as carsList } from "../data";
import { ICar } from "../interfaces";
interface ICartState {
  carsList: ICar[];
  selectedItems: number[];
  total: number;
}
const reducer = (
  state: ICartState,
  action: { type: string; payload: number }
) => {
  switch (action.type) {
    case "ADD_ITEM":
      return {
        selectedItems:
          state.selectedItems.length > 0
            ? [...state.selectedItems, action.payload]
            : [action.payload],
        total: [...state.selectedItems, action.payload].reduce(
          (previousValue: number, currentValue: number) => {
            const currentPrice =
              carsList.find((item) => item.id === currentValue)?.price || 0;
            return previousValue + currentPrice;
          },
          0
        ),
      };
    case "REMOVE_ITEM":
      return {
        selectedItems: [...state.selectedItems].filter(
          (item) => item !== action.payload
        ),
        total: [...state.selectedItems]
          .filter((item) => item !== action.payload)
          .reduce((previousValue: number, currentValue: number) => {
            return previousValue + currentValue;
          }, 0),
      };
    default:
      return state;
  }
};
export const CartContext = React.createContext<any>(null);
export const CartContextProvider = (props: any) => {
  const [cartState, dispatch] = useReducer<ICartState | any>(reducer, {
    selectedItems: [],
    total: 0,
    carsList,
  });

  return (
    <CartContext.Provider value={{ dispatch, cartState, carsList }}>
      {props.children}
    </CartContext.Provider>
  );
};
