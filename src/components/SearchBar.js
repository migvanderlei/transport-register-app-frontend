import { React } from "react";
import TextField from "@mui/material/TextField";

import "../css/SearchBar.css";

const SearchBar = () => {
  return (
    <div className="main">
      <div className="search">
        <TextField
          id="outlined-basic"
          variant="outlined"
          fullWidth
          label="Search"
        />
      </div>
    </div>
  );
}

export default SearchBar;