import React, { useState } from 'react';
import Joke from './Joke';
import Stories from './Stories';
import Tasks from './Tasks';
import Matrix from './Matrix';
import Gallery from './Gallery';

function App() {
  const [userQuery, setUserQuery] = useState('');
  const [showGallery, setShowGallery] = useState(true);

  const updateUserQuery = event => {
    setUserQuery(event.target.value);
    console.log('userQuery', userQuery);
  };

  const handleKeyPress = event => {
    if (event.key === 'Enter') {
      searchQuery();
    }
  };

  const searchQuery = () => {
    window.open(`https://google.com/search?q=${userQuery}`, '_blank');
  };

  const toggleShowGallery = () => {
    setShowGallery(!showGallery);
  };

  return (
    <div className="App">
      <h1>Hello John</h1>
      <div className="form">
        <input value={userQuery} onChange={updateUserQuery} onKeyPress={handleKeyPress} />
        <button onClick={searchQuery}>Search</button>
      </div>
      <hr />
      <Joke />
      <hr />
      <Tasks />
      <hr />
      <div>{showGallery ? <Gallery /> : null}</div>
      <button onClick={toggleShowGallery}>{showGallery ? 'Hide' : 'Show'} Gallery</button>
      <hr />
      <Stories />
      <hr />
      <Matrix />
    </div>
  );
}

export default App;
