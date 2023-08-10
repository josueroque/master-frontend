import React, { FC, PropsWithChildren, createContext } from "react";
import { TypeSearch } from "../components/search-input";
import List from "../pages/list";
import { ListPage } from "../pages/list/list";
interface Context {
  selectedOrganization: string;
  defaultOrganization: string;
  setSelectedOrganization: any;
}
const ListContext = createContext({
  selectedOrganization: "lemoncode",
  defaultOrganization: "lemoncode",
  setSelectedOrganization: () => {},
} as Context);
export const ListContextProvider = () => {
  const defaultOrganization = "lemoncode";
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
      <TypeSearch />
      <ListPage />
    </ListContext.Provider>
  );
};

export default ListContext;
