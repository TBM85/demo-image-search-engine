import "./App.scss";

import Header from "./components/Header/Header";
import ImageOutput from "./components/ImageOutput/ImageOutput";
import Search from "./components/Search/Search";

function App() {
  return (
    <div className="App">
      <Header />
      <Search />
      <ImageOutput />
    </div>
  );
}

export default App;
