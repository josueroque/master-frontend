import React, { createContext } from "react";

export type TypeContext = {
  searchText: string;
  defaultCharacter: string;
  setSearchText?: React.Dispatch<React.SetStateAction<string>>;
};

export const RickMortyContext = createContext<TypeContext | null>(null);
export const RickMortyContextProvider = (props: any) => {
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
