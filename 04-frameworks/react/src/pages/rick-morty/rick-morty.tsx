import React from "react";
import { TypeSearch } from "../../components/search-input/search-input";
import { Button } from "@mui/material";
import { fetchItems } from "../../utils";
import MainMenu from "../../components/main-menu/main-menu";
import Paginator from "../../components/pagination/pagination";
import { RickMortyContext } from "../../context/rick-morty-context";
import ListComponent from "../../components/list/list";
export interface CharacterEntity {
  id: string;
  name: string;
  image: string;
}

export const RickMorty: React.FC = () => {
  const [characters, setCharacters] = React.useState<CharacterEntity[]>([]);
  const [count, setCount] = React.useState(1);
  const [page, setPage] = React.useState(1);
  const { searchText } = React.useContext(RickMortyContext);
  const [textEntered, setTextEntered] = React.useState(searchText);

  React.useEffect(() => {
    setTextEntered("");
  }, []);

  React.useEffect(() => {
    let url = `https://rickandmortyapi.com/api/character/?page=${page}&count=5`;

    if (textEntered) url += `&name=${textEntered}`;

    fetchItems(url).then((response) => {
      setCharacters(response.results);
      setCount(response.info.pages);
    });
  }, [textEntered, page]);

  const applySearch = () => {
    setTextEntered(searchText);
  };

  React.useEffect(() => {
    if (!searchText) setTextEntered("");
  }, [searchText]);

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
        <TypeSearch defaultText="" contextProvider="rickMorty" />
      </div>
      <div>
        <ListComponent
          items={characters}
          title={`Characters`}
          path="rick-morty"
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
