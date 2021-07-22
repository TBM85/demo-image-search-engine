import { Container, TextField } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

import classes from "./Search.module.scss";

const Search = () => {
  return (
    <Container className={classes.Search}>
      <div className={classes.SearchIcon}>
        <SearchIcon />
      </div>
      <TextField
        className={classes.TextField}
        name="searchText"
        label="Search for Images"
        type="search"
        fullWidth={true}
        margin="normal"
        variant="outlined"
      />
    </Container>
  );
};

export default Search;
