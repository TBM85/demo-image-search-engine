import React, { useEffect, useState } from "react";
import { Container, TextField } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

import classes from "./Search.module.scss";
import axios from "axios";

const Search = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_BASE_URL}/?key=${
          process.env.REACT_APP_API_KEY
        }&q=all&image_type=photo&orientation=horizontal&per_page=${30}&safesearch=true`
      )
      .then((response) => {
        setImages(response.data.hits);
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

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
      <div className={classes.ImageContainer}>
        {images.map((image, index) => (
          <img key={index} src={image.largeImageURL} alt={image.tags} />
        ))}
      </div>
    </Container>
  );
};

export default Search;
