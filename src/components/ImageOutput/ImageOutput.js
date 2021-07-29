import { useState } from "react";
import PropTypes from "prop-types";
import { Container, ImageList, ImageListItem } from "@material-ui/core";

import classes from "./ImageOutput.module.scss";
import ImgDialog from "../ImgDialog/ImgDialog";

const ImageOutput = (props) => {
  const { searchText, images, totalImages } = props;

  const [selectedImg, setSelectedImg] = useState("");
  const [selectedAlt, setSelectedAlt] = useState("");
  const [selectedUser, setSelectedUser] = useState("");
  const [selectedPageUrl, setSelectedPageUrl] = useState("");
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

  const stringToAdd = "340.jpg";

  // Replace the width value of the image in the string
  const replaceSize = (str, stringToAdd) => {
    return (
      str.substring(0, str.length - 7) + stringToAdd
    );
  };

  return (
    <Container className={classes.ImageContainer}>
      {searchText.length > 0 && images.length === 0 ? (
        <p className={classes.NoImages}>No image matches your search</p>
      ) : (
        <p className={classes.TotalImages}>{totalImages} images</p>
      )}
      {images.length > 0 && (
        <ImageList cols={4} className={classes.ImageList}>
          {images.map((img) => (
            <ImageListItem key={img.id} className={classes.ImageListItem}>
              <img
                src={replaceSize(img.webformatURL, stringToAdd)}
                alt={img.tags}
                onClick={() =>
                  handleOpen(img.largeImageURL, img.tags, img.user, img.pageURL)
                }
              />
            </ImageListItem>
          ))}
        </ImageList>
      )}

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

ImageOutput.propTypes = {
  selectedImg: PropTypes.string,
  selectedAlt: PropTypes.string,
  selectedUser: PropTypes.string,
  selectedPageUrl: PropTypes.string,
  isOpen: PropTypes.bool,
  showInfo: PropTypes.bool,
  handleOpen: PropTypes.func,
  handleClose: PropTypes.func,
  handleInfo: PropTypes.func,
};
