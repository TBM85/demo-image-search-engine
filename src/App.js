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
      })
      .catch((error) => {
        console.log(error);
      });
  }, [searchText, page]);

  // Rewrite the text input field
  const changeSearchTextHandler = (event) => {
    setSearchText(event.target.value);
  };

  const changeCurrentPageHandler = (event, newPage) => {
    setPage(newPage);
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
            totalImages={totalImages}
            changeCurrentPageHandler={changeCurrentPageHandler}
          />
        )}
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
  page: PropTypes.number,
  totalImages: PropTypes.number,
};
