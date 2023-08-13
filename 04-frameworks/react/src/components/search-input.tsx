import React, { FC, FunctionComponent, useState, useContext } from "react";
import {
  FormControl,
  InputAdornment,
  TextField,
  createStyles,
} from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";
import { ListContext } from "../context/list-context";

const useStyles: any = makeStyles(() => {
  return createStyles({
    search: {
      margin: "0",
    },
  });
});

export const TypeSearch: React.FC = () => {
  const { selectedOrganization, setSelectedOrganization } =
    React.useContext(ListContext);
  const { search } = useStyles({});
  const [showClearIcon, setShowClearIcon] = useState("flex");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setShowClearIcon(event.target.value === "" ? "none" : "flex");
    setSelectedOrganization(event.target.value);
  };

  const handleClick = (): void => {
    setSelectedOrganization("");
    setShowClearIcon("none");
  };

  return (
    <div id="app">
      <FormControl className={search}>
        <TextField
          size="small"
          variant="outlined"
          value={selectedOrganization}
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
