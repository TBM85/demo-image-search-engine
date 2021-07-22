import React, { useEffect, useState } from "react";
import { Container, ImageListItem }  from '@material-ui/core';
import axios from "axios";

import classes from "./ImageOutput.module.scss";
import { ImageList } from "@material-ui/core";

const ImageOutput = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_BASE_URL}/?key=${
          process.env.REACT_APP_API_KEY
        }&q=all&image_type=photo&orientation=horizontal&per_page=${36}&safesearch=true`
      )
      .then((response) => {
        setImages(response.data.hits);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <Container className={classes.ImageContainer}>
      <ImageList cols={4} className={classes.ImageList}>
        {images.map((img) => (
          <ImageListItem key={img.id}>
            <img src={img.largeImageURL} alt={img.tags} />
          </ImageListItem>
        ))}
      </ImageList>
    </Container>
  );
};

export default ImageOutput;