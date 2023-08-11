import React from "react";
import { Link } from "react-router-dom";
import { TypeSearch } from "../../components/search-input";
import { Button } from "@mui/material";
import { ListContext } from "../../context/list-context";
interface MemberEntity {
  id: string;
  login: string;
  avatar_url: string;
}

export const ListPage: React.FC = () => {
  const [members, setMembers] = React.useState<MemberEntity[]>([]);

  const { selectedOrganization, defaultOrganization } =
    React.useContext(ListContext);

  const [textEntered, setTextEntered] = React.useState(defaultOrganization);

  React.useEffect(() => {
    fetch(`https://api.github.com/orgs/${textEntered}/members`)
      .then((response) => response.json())
      .then((json) => setMembers(json));
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
      <h2>Selected Organization: {selectedOrganization}</h2>+{" "}
      <div className="list-user-list-container">
        <span className="list-header">Avatar</span>
        <span className="list-header">Id</span>
        <span className="list-header">Name</span>
        {Array.isArray(members) &&
          members.map((member) => (
            <>
              <img src={member.avatar_url} />
              <span>{member.id}</span>
              <Link to={`/detail/${member.login}`}>{member.login}</Link>
            </>
          ))}
      </div>
      <Link to="/detail">Navigate to detail page</Link>
    </>
  );
};
