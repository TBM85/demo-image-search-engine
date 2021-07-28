import React from "react";
import { Pagination } from "@material-ui/lab";

import classes from "./ImgPagination.module.scss";

const ImgPagination = () => {
  return (
    <div className={classes.Pagination}>
      <Pagination count={10} shape="rounded" size="small" />
    </div>
  );
};

export default ImgPagination;
