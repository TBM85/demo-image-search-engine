import React from "react";
import { Pagination } from "@material-ui/lab";

import classes from "./ImgPagination.module.scss";

const ImgPagination = (props) => {
  const { totalImages, page, changeCurrentPageHandler } = props;

  const totalPages = Math.ceil(totalImages / 36);

  return (
    <div className={classes.Pagination}>
      <Pagination
        count={totalPages}
        boundaryCount={1}
        shape="rounded"
        size="small"
        page={page}
        onChange={changeCurrentPageHandler}
      />
    </div>
  );
};

export default ImgPagination;
