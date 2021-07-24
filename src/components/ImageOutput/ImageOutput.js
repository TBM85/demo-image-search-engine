import { useState } from "react";
import { Container, ImageList, ImageListItem } from "@material-ui/core";

import classes from "./ImageOutput.module.scss";
import ImgDialog from "../ImgDialog/ImgDialog";

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
    setSelectedUser(imgUser);
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

      <ImgDialog
        isOpen={isOpen}
        handleClose={handleClose}
        handleInfo={handleInfo}
        showInfo={showInfo}
        selectedImg={selectedImg}
        selectedAlt={selectedAlt}
        selectedUser={selectedUser}
      />
    </Container>
  );
};

export default ImageOutput;
