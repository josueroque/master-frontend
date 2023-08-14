import React from "react";
import { TypeSearch } from "../../components/search-input/search-input";
import { Button } from "@mui/material";
import { ListContext } from "../../context/list-context";
import { fetchItems } from "../../utils";
import { ListComponent } from "../../components/list/list";
import MainMenu from "../../components/main-menu/main-menu";
import Paginator from "../../components/pagination/pagination";

export interface MemberEntity {
  id: string;
  login: string;
  avatar_url: string;
}

export const ListPage: React.FC = () => {
  const [members, setMembers] = React.useState<MemberEntity[]>([]);

  const { selectedOrganization } = React.useContext(ListContext);

  const [textEntered, setTextEntered] = React.useState(selectedOrganization);

  const [count, setCount] = React.useState(1);

  const [page, setPage] = React.useState(1);

  const pageSize = 5;

  React.useEffect(() => {
    if (textEntered) {
      fetchItems(`https://api.github.com/orgs/${textEntered}/members`).then(
        (json) => {
          if (json.length > 0) {
            setCount(json.lenght);
            const pageResults = [...json].splice(
              (page - 1) * pageSize,
              pageSize
            );
            setMembers(pageResults);
            setCount(Math.ceil(json.length / pageSize));
          } else resetData();
        }
      );
    } else resetData();
  }, [textEntered, page]);

  React.useEffect(() => {
    if (!selectedOrganization) setTextEntered("");
  }, [selectedOrganization]);

  const resetData = () => {
    setMembers([]);
    setPage(1);
    setCount(1);
  };

  const applySearch = () => {
    setTextEntered(selectedOrganization);
  };

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPage(value);
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
      <div>
        <ListComponent
          items={members}
          title={`Selected Organization: ${selectedOrganization}`}
        />
        <div className="pagination">
          <Paginator
            count={count}
            page={page}
            handlePageChange={handlePageChange}
          />
        </div>
      </div>
    </>
  );
};
