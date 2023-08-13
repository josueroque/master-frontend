import React from "react";
import { TypeSearch } from "../../components/search-input/search-input";
import { Button } from "@mui/material";
import { ListContext } from "../../context/list-context";
import { fetchItems } from "../../utils";
import { ListComponent } from "../../components/list/list";
import MainMenu from "../../components/main-menu/main-menu";

export interface MemberEntity {
  id: string;
  login: string;
  avatar_url: string;
}

export const ListPage: React.FC = () => {
  const [members, setMembers] = React.useState<MemberEntity[]>([]);

  const { selectedOrganization } = React.useContext(ListContext);

  const [textEntered, setTextEntered] = React.useState(selectedOrganization);

  React.useEffect(() => {
    fetchItems(`https://api.github.com/orgs/${textEntered}/members`).then(
      (json) => setMembers(json)
    );
  }, [textEntered]);

  React.useEffect(() => {
    if (!selectedOrganization) setTextEntered("");
  }, [selectedOrganization]);

  const applySearch = () => {
    setTextEntered(selectedOrganization);
  };

  return (
    <>
      <MainMenu />
      <div className="search-section">
        <Button
          variant="contained"
          className="lower-case"
          onClick={applySearch}
        >
          Search
        </Button>
        <TypeSearch />
      </div>
      <ListComponent
        items={members}
        title={`Selected Organization: ${selectedOrganization}`}
      />
    </>
  );
};
