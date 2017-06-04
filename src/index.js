import React, {Component} from "react";
import ReactDOM from "react-dom";
import YTSearch from "youtube-api-search";
import SearchBar from "./components/search_bar";
import VideoList from "./components/video_list";
const API_KEY = "AIzaSyA75wHqQR6JWceOWQZwNoAGCldUyF0hGiU";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { videos: [] }


    YTSearch({key: API_KEY, term: "react js"}, (videos) => {
      this.setState({ videos });
      // key and value are same name in state, can be shortened from ------> this.setState({ videos: videos });
    });
  }

  render() {
    return (
      <div>
        <SearchBar />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
