import React from "react";
import PropTypes from "prop-types";
import { Dialog } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import InfoIcon from "@material-ui/icons/Info";

import OpenInNewIcon from "@material-ui/icons/OpenInNew";

import classes from "./ImgDialog.module.scss";

const ImgDialog = (props) => {
  const {
    isOpen,
    handleClose,
    handleInfo,
    showInfo,
    selectedImg,
    selectedAlt,
    selectedUser,
    selectedPageUrl,
  } = props;

  // Leads to the source of the image on the pixabay page
  const handleOpenSource = () => {
    window.open(selectedPageUrl);
  };

  return (
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
          <OpenInNewIcon
            className={classes.OpenInNewIcon}
            onClick={handleOpenSource}
          />
        </div>
      )}
    </Dialog>
  );
};

export default ImgDialog;

ImgDialog.propTypes = {
  handleOpenSource: PropTypes.func,
};
