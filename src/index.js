import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTsearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';

const API_KEY = 'AIzaSyAiD8VI8ooPXTGrwCVU4oJ5OMLwgKlBqj4';


class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            videos: []
        }

        YTsearch({key: API_KEY, term: 'reactjs'}, (videos) => {
            this.setState({ videos })
          })
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


ReactDOM.render(<App />, document.querySelector('.container'));
