import { lazy, Suspense, useEffect, useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import "./App.scss";

import Header from "./components/Header/Header";
import Search from "./components/Search/Search";
import Footer from "./components/Footer/Footer";
import Loader from "./components/UI/Loader/Loader";
import ImgPagination from "./components/ImgPagination/ImgPagination";

const ImageOutput = lazy(() => import("./components/ImageOutput/ImageOutput"));

const App = () => {
  const [images, setImages] = useState([]);
  const [totalImages, setTotalImages] = useState(Number);
  const [totalHits, setTotalHits] = useState(Number);
  const [searchText, setSearchText] = useState("");
  const [page, setPage] = useState(1);

  useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_BASE_URL}/?key=${
          process.env.REACT_APP_API_KEY
        }&q=${searchText}&image_type=photo&orientation=horizontal&page=${page}&per_page=${36}&imageWidth=${150}&safesearch=true`
      )
      .then((response) => {
        setImages(response.data.hits);
        setTotalImages(response.data.total);
        setTotalHits(response.data.totalHits);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [searchText, page]);

  // Rewrite the text input field
  const changeSearchTextHandler = (event) => {
    setSearchText(event.target.value);

    // Returns the pagination to one, each time a new word is searched
    setPage(1);
  };

  // Define the current page
  const changeCurrentPageHandler = (event, newPage) => {
    setPage(newPage);

    // Every time the pagination changes, the page scrolls up
    window["scrollTo"]({ top: 0, behavior: "smooth"});
  };

  return (
    <div className="App">
      <Header />
      <Search
        searchText={searchText}
        changeSearchTextHandler={changeSearchTextHandler}
      />
      <Suspense fallback={<Loader />}>
        <ImageOutput
          searchText={searchText}
          images={images}
          totalImages={totalImages}
        />

        {totalImages > 36 && (
          <ImgPagination
            page={page}
            totalHits={totalHits}
            changeCurrentPageHandler={changeCurrentPageHandler}
          />
        )}

        <Footer images={images} />
      </Suspense>
    </div>
  );
};

export default App;

App.propTypes = {
  images: PropTypes.object,
  searchText: PropTypes.string,
  changeSearchTextHandler: PropTypes.func,
  page: PropTypes.number,
  totalImages: PropTypes.number,
};
