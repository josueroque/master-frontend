import React from "react";
import {
  FormControl,
  InputAdornment,
  TextField,
  createStyles,
} from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";
import { ListContext, TypeContext } from "../../context/list-context";

import {
  RickMortyContext,
  TypeContext as RickMortyTypeContext,
} from "../../context/rick-morty-context";

const useStyles: any = makeStyles(() => {
  return createStyles({
    search: {
      margin: "0",
    },
  });
});

interface Props {
  defaultText: string;
  contextProvider: string;
}

export const TypeSearch: React.FC<Props> = ({
  defaultText,
  contextProvider,
}) => {
  const provider: React.Context<TypeContext | RickMortyTypeContext> =
    contextProvider === "listContext" ? ListContext : RickMortyContext;
  const { search } = useStyles({});
  const [showClearIcon, setShowClearIcon] = React.useState("flex");
  const { searchText, setSearchText } = React.useContext(provider);

  //TODO Check why MUI Textfield is not setting focus
  const inputRef = React.useRef(null);

  React.useEffect(() => {
    setSearchText(defaultText);
  }, []);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setShowClearIcon(event.target.value === "" ? "none" : "flex");
    setSearchText(event.target.value);
    inputRef.current.focus();
  };

  const handleClick = (): void => {
    setSearchText("");
    setShowClearIcon("none");
  };

  return (
    <div>
      <FormControl className={search}>
        <TextField
          size="small"
          inputRef={inputRef}
          variant="outlined"
          value={searchText}
          onChange={handleChange}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment
                position="end"
                style={{ display: showClearIcon, cursor: "pointer" }}
                onClick={handleClick}
              >
                <ClearIcon />
              </InputAdornment>
            ),
          }}
        />
      </FormControl>
    </div>
  );
};
