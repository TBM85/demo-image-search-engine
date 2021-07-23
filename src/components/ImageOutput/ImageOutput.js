import { useState } from "react";
import {
  Container,
  Dialog,
  ImageList,
  ImageListItem,
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";

import classes from "./ImageOutput.module.scss";

const ImageOutput = (props) => {
  const { images } = props;

  const [selectedImg, setSelectedImg] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = (imgSelected) => {
    setIsOpen(true);
    setSelectedImg(imgSelected);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <Container className={classes.ImageContainer}>
      <ImageList cols={4} className={classes.ImageList}>
        {images.map((img) => (
          <ImageListItem key={img.id} className={classes.ImageListItem}>
            <img
              src={img.largeImageURL}
              alt={img.tags}
              onClick={() => handleOpen(img.largeImageURL)}
            />
          </ImageListItem>
        ))}
      </ImageList>

      <Dialog
        className={classes.Dialog}
        modal="true"
        open={isOpen}
        onClose={handleClose}
        maxWidth="md"
      >
        <CloseIcon onClick={handleClose} className={classes.CloseIcon} />
        <img src={selectedImg} alt="" />
      </Dialog>
    </Container>
  );
};

export default ImageOutput;
