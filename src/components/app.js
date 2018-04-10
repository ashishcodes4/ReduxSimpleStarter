import React, { Component } from 'react';
import SearchBar from './search_bar';
import YTsearch from 'youtube-api-search';

const API_KEY = 'AIzaSyAiD8VI8ooPXTGrwCVU4oJ5OMLwgKlBqj4';

YTsearch({key: API_KEY, term: 'reactjs'}, function(data){
  console.log(data);
})

class App extends Component {
  render() {
    return (
      <div>
        <h1>React simple starter</h1>
        <SearchBar />
      </div>
    );
  }
}
export default App;