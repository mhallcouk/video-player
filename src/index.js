import React, {Component} from "react";
import ReactDOM from "react-dom";
import './../style/style.css';
import _ from "lodash";
import YTSearch from "youtube-api-search";
import Header from "./components/header";
import SearchBar from "./components/search_bar";
import VideoList from "./components/video_list";
import VideoDetail from "./components/video_detail";
const API_KEY = "AIzaSyA75wHqQR6JWceOWQZwNoAGCldUyF0hGiU";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
     }
     this.videoSearch("jimi hendrix");
  }

  videoSearch(term) {
    YTSearch({key: API_KEY, term: term}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
      // key and value are same name in state, can be shortened from ------> this.setState({ videos: videos });
    });
  };

  render() {
    const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300);
    return (
      <div className="outer-div">
        <Header />
        <div className="container">
          <SearchBar onSearchTermChange={videoSearch} />
          <div className="row">
            <VideoDetail video={this.state.selectedVideo} />
            <VideoList
              onVideoSelect={selectedVideo => this.setState({selectedVideo})}
              videos={this.state.videos} />
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
