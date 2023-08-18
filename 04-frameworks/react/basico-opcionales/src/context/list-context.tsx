import React, { PropsWithChildren, createContext } from "react";

export type TypeContext = {
  searchText: string;
  defaultOrganization: string;
  setSearchText?: React.Dispatch<React.SetStateAction<string>>;
};

const defaultOrganization = "lemoncode";

interface Props extends PropsWithChildren {}

export const ListContext = createContext<TypeContext | null>(null);
export const ListContextProvider: React.FC<Props> = (props) => {
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
