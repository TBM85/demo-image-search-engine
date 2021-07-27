import { lazy, Suspense, useEffect, useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import SyncLoader from "react-spinners/SyncLoader";
import "./App.scss";

import Header from "./components/Header/Header";
import Search from "./components/Search/Search";
import Footer from "./components/Footer/Footer";

const ImageOutput = lazy(() => import("./components/ImageOutput/ImageOutput"));

const App = () => {
  const [images, setImages] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_BASE_URL}/?key=${
          process.env.REACT_APP_API_KEY
        }&q=${searchText}&image_type=photo&orientation=horizontal&per_page=${36}&safesearch=true`
      )
      .then((response) => {
        setImages(response.data.hits);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [searchText]);

  // Rewrite the text input field
  const changeSearchTextHandler = (event) => {
    setSearchText(event.target.value);
  };

  return (
    <div className="App">
      <Header />
      <Search
        searchText={searchText}
        changeSearchTextHandler={changeSearchTextHandler}
      />
      <Suspense
        fallback={
          <SyncLoader
            loading={true}
            color="#005F85"
            size="20px"
            margin="5px"
          />
        }
      >
        <ImageOutput searchText={searchText} images={images} />
      </Suspense>
      <Footer images={images} />
    </div>
  );
};

export default App;

App.propTypes = {
  images: PropTypes.object,
  searchText: PropTypes.string,
  changeSearchTextHandler: PropTypes.func,
};
