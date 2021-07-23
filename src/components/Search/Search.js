import { Container, TextField } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

import classes from "./Search.module.scss";

const Search = (props) => {
  const { searchText, changeSearchTextHandler } = props;

  return (
    <Container className={classes.Search}>
      <div className={classes.SearchIcon}>
        <SearchIcon />
      </div>
      <TextField
        className={classes.TextField}
        name="searchText"
        label="Search for Images"
        value={searchText}
        onChange={changeSearchTextHandler}
        type="search"
        fullWidth={true}
        margin="normal"
        variant="outlined"
      />
    </Container>
  );
};

export default Search;
