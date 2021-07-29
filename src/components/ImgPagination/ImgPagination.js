import React from "react";
import PropTypes from "prop-types";
import { Pagination } from "@material-ui/lab";

import classes from "./ImgPagination.module.scss";

const ImgPagination = (props) => {
  const { totalHits, page, changeCurrentPageHandler, isBigDevice } = props;

  const totalPages = isBigDevice
    ? Math.ceil(totalHits / 36)
    : Math.ceil(totalHits / 12);

  return (
    <div className={classes.Pagination}>
      <Pagination
        count={totalPages}
        shape="rounded"
        page={page}
        siblingCount={0}
        onChange={changeCurrentPageHandler}
      />
    </div>
  );
};

export default ImgPagination;

ImgPagination.propTypes = {
  totalPages: PropTypes.number,
};
