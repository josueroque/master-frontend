import React, { FC, FunctionComponent, useState } from "react";
import {
  FormControl,
  InputAdornment,
  TextField,
  createStyles,
} from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";

const useStyles: any = makeStyles(() => {
  return createStyles({
    search: {
      margin: "0",
    },
  });
});

export const TypeSearch: FunctionComponent = () => {
  const { search } = useStyles({});
  const [organization, setOrganization] = React.useState("lemoncode");
  const [showClearIcon, setShowClearIcon] = useState("none");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setShowClearIcon(event.target.value === "" ? "none" : "flex");
  };

  const handleClick = (): void => {
    // TODO: Clear the search input
    console.log("clicked the clear icon...");
  };

  return (
    <div id="app">
      <FormControl className={search}>
        <TextField
          size="small"
          variant="outlined"
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
