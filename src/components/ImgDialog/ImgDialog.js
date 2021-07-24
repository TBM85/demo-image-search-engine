import React from "react";
import { Dialog } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import InfoIcon from "@material-ui/icons/Info";

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
  } = props;

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
        </div>
      )}
    </Dialog>
  );
};

export default ImgDialog;
