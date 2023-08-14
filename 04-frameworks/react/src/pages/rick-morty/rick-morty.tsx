import React from "react";
import { Link } from "react-router-dom";
import { TypeSearch } from "../../components/search-input/search-input";
import { Button } from "@mui/material";
import { fetchItems } from "../../utils";
import MainMenu from "../../components/main-menu/main-menu";
import Paginator from "../../components/pagination/pagination";
interface CharacterEntity {
  id: string;
  name: string;
  image: string;
}

export const RickMorty: React.FC = () => {
  const [characters, setCharacters] = React.useState<CharacterEntity[]>([]);
  const [textEntered, setTextEntered] = React.useState("");
  const [count, setCount] = React.useState(1);
  const [page, setPage] = React.useState(1);

  React.useEffect(() => {
    fetchItems(
      `https://rickandmortyapi.com/api/character/?page=${page}&count=5`
    ).then((response) => {
      console.log({ response });
      setCharacters(response.results);
      setCount(response.info.pages);
    });
  }, [textEntered, page]);

  const applySearch = () => {
    setTextEntered(textEntered);
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

      <h2>Characters List </h2>
      <div>
        <div className="list-user-list-container">
          <span className="list-header">Avatar</span>
          <span className="list-header">Id</span>
          <span className="list-header">Name</span>
          {Array.isArray(characters) &&
            characters.map((character) => (
              <>
                <img src={character.image} />
                <span className="text-id">{character.id}</span>
                <Link to={`/detail/${character.id}`}>{character.name}</Link>
              </>
            ))}
        </div>
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
