import React, { FC, PropsWithChildren, createContext } from "react";

export type TypeContext = {
  selectedOrganization: string;
  defaultOrganization: string;
  setSelectedOrganization?: React.Dispatch<React.SetStateAction<string>>;
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
        selectedOrganization,
        setSelectedOrganization,
      }}
    >
      {props.children}
    </ListContext.Provider>
  );
};
