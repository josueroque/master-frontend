import React, { createContext } from "react";

export type TypeContext = {
  searchText: string;
  defaultOrganization: string;
  setSearchText?: React.Dispatch<React.SetStateAction<string>>;
};

const defaultOrganization = "lemoncode";
export const ListContext = createContext<TypeContext | null>(null);
export const ListContextProvider = (props: any) => {
  const [selectedOrganization, setSelectedOrganization] =
    React.useState(defaultOrganization);

  return (
    <ListContext.Provider
      value={{
        defaultOrganization,
        searchText: selectedOrganization,
        setSearchText: setSelectedOrganization,
      }}
    >
      {props.children}
    </ListContext.Provider>
  );
};
