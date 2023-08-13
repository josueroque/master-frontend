import React from "react";
import { Link } from "react-router-dom";
import { TypeSearch } from "../../components/search-input";
import { Button } from "@mui/material";
import { ListContext } from "../../context/list-context";
import { fetchItems } from "../../utils";
import { ListComponent } from "../../components/list/list";
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
