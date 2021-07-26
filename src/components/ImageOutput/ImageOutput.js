import { useState } from "react";
import { Container, ImageList, ImageListItem } from "@material-ui/core";

import classes from "./ImageOutput.module.scss";
import ImgDialog from "../ImgDialog/ImgDialog";

const ImageOutput = (props) => {
  const { images } = props;

  const [selectedImg, setSelectedImg] = useState(null);
  const [selectedAlt, setSelectedAlt] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);
  const [selectedPageUrl, setSelectedPageUrl] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [showInfo, setShowInfo] = useState(false);

  // Open the Dialog component
  const handleOpen = (imgSelected, imgAlt, imgUser, imgPageUrl) => {
    setIsOpen(true);
    setSelectedImg(imgSelected);
    setSelectedAlt(imgAlt);
    setSelectedUser(imgUser);
    setSelectedPageUrl(imgPageUrl);
  };

  // Close the Dialog component
  const handleClose = () => {
    setIsOpen(false);
    setShowInfo(false);
  };

  // Show and hide image author information
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
              onClick={() =>
                handleOpen(img.largeImageURL, img.tags, img.user, img.pageURL)
              }
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
        selectedPageUrl={selectedPageUrl}
      />
    </Container>
  );
};

export default ImageOutput;
