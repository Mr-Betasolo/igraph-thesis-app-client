import React from "react";
import {
  FormControl,
  InputLabel,
  Input,
  InputAdornment,
  IconButton,
} from "@material-ui/core";
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";
import clsx from "clsx";

import useStyles from "./style";

const Search = ({ setSearchInput, searchInput, handleSearch, label }) => {
  const classes = useStyles();

  return (
    <div className={classes.searchRoot}>
      <FormControl className={clsx(classes.margin, classes.textField)}>
        <InputLabel htmlFor={label}>Search by {label}</InputLabel>
        <Input
          id={label}
          type="search"
          value={searchInput}
          fullWidth
          onChange={(e) => setSearchInput(e.target.value)}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleSearch}
              >
                <SearchRoundedIcon />
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>
    </div>
  );
};

export default Search;
