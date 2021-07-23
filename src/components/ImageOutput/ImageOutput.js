import { Container, ImageListItem }  from '@material-ui/core';

import classes from "./ImageOutput.module.scss";
import { ImageList } from "@material-ui/core";

const ImageOutput = (props) => {
  const { images } = props;

  return (
    <Container className={classes.ImageContainer}>
      <ImageList cols={4} className={classes.ImageList}>
        {images.map((img) => (
          <ImageListItem key={img.id} className={classes.ImageListItem}>
            <img src={img.largeImageURL} alt={img.tags} />
          </ImageListItem>
        ))}
      </ImageList>
    </Container>
  );
};

export default ImageOutput;