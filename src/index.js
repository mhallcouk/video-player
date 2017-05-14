import React from "react";
import ReactDOM from "react-dom";

import SearchBar from "./components/search_bar";
//Create component that produces some html

const API_KEY = "AIzaSyA75wHqQR6JWceOWQZwNoAGCldUyF0hGiU";


const App = () => {
  return <div>
    <SearchBar />
  </div>;
}


//Put the html on the page
ReactDOM.render(<App />, document.querySelector("#root"));
