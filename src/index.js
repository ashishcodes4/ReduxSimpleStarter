import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTsearch from 'youtube-api-search';
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyAiD8VI8ooPXTGrwCVU4oJ5OMLwgKlBqj4';


class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            videos: []
        }

        YTsearch({key: API_KEY, term: 'reactjs'}, function(data){
            console.log(data);
          })
    }
  render() {
    return (
      <div>
        <h1>React simple starter</h1>
        <SearchBar />
      </div>
    );
  }
}


ReactDOM.render(<App />, document.querySelector('.container'));
