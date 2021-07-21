import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";

import classes from "./Header.module.scss";

const Header = () => {
  return (
    <AppBar position="static" className={classes.Header}>
      <Toolbar variant="dense">
        <Typography variant="h5" className={classes.Title}>
          Image Search Engine
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
