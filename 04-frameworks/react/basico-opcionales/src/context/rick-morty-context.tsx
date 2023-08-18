import React, { PropsWithChildren, createContext } from "react";

export type TypeContext = {
  searchText: string;
  defaultCharacter: string;
  setSearchText?: React.Dispatch<React.SetStateAction<string>>;
};

interface Props extends PropsWithChildren {}

export const RickMortyContext = createContext<TypeContext | null>(null);
export const RickMortyContextProvider: React.FC<Props> = (props) => {
  const [searchText, setSearchText] = React.useState("");

  return (
    <RickMortyContext.Provider
      value={{
        defaultCharacter: "",
        searchText,
        setSearchText,
      }}
    >
      {props.children}
    </RickMortyContext.Provider>
  );
};
