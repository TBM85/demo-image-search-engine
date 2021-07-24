import { useState } from "react";
import {
  Container,
  Dialog,
  ImageList,
  ImageListItem
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import InfoIcon from "@material-ui/icons/Info";

import classes from "./ImageOutput.module.scss";

const ImageOutput = (props) => {
  const { images } = props;

  const [selectedImg, setSelectedImg] = useState(null);
  const [selectedAlt, setSelectedAlt] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [showInfo, setShowInfo] = useState(false);

  const handleOpen = (imgSelected, imgAlt, imgUser) => {
    setIsOpen(true);
    setSelectedImg(imgSelected);
    setSelectedAlt(imgAlt);
    setSelectedUser(imgUser)
  };

  const handleClose = () => {
    setIsOpen(false);
    setShowInfo(false);
  };

  const handleInfo = () => {
    setShowInfo(!showInfo);
  };

  return (
    <Container className={classes.ImageContainer}>
      <ImageList cols={4} className={classes.ImageList}>
        {images.map((img) => (
          <ImageListItem key={img.id} className={classes.ImageListItem}>
            <img
              src={img.largeImageURL}
              alt={img.tags}
              onClick={() => handleOpen(img.largeImageURL, img.tags, img.user)}
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
        <img src={selectedImg} alt={selectedAlt} />
        <InfoIcon onClick={handleInfo} className={classes.InfoIcon} />
        {showInfo && (
          <div className={classes.InfoContainer}>
            <p>Author: {selectedUser}</p>
          </div>
        )}
      </Dialog>
    </Container>
  );
};

export default ImageOutput;
