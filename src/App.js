import { useEffect, useState } from "react";
import axios from "axios";
import "./App.scss";

import Header from "./components/Header/Header";
import ImageOutput from "./components/ImageOutput/ImageOutput";
import Search from "./components/Search/Search";

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
      <ImageOutput images={images} />
    </div>
  );
};

export default App;
