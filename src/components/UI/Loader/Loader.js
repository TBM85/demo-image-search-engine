import React from "react";
import SyncLoader from "react-spinners/SyncLoader";

const Loader = () => {
  return (
    <SyncLoader
      loading={true}
      color="#005F85"
      size="20px"
      margin="5px"
    />
  );
};

export default Loader;
