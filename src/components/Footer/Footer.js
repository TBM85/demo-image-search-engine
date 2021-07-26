import React from "react";

import classes from "./Footer.module.scss";

const Footer = (props) => {
  const { images } = props;

  return (
    <footer
      className={`${classes.Footer} ${
        images.length > 0 ? "" : classes.FooterBottom
      }`}
    >
      <span>
        © Copyright 2021. <strong>"TBM85"</strong>
      </span>
      <span> All rights reserved</span>
    </footer>
  );
};

export default Footer;
