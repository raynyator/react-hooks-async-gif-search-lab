import React, { useState } from 'react';
import GifList from './GifList';
import GifSearch from './GifSearch';

function GifListContainer() {
  const [gifs, setGifs] = useState([]);
  
  const fetchGifs = (query) => {
    const apiKey = 'YOUR_API_KEY'; 
    const apiUrl = `https://api.giphy.com/v1/gifs/search?q=${query}&api_key=${apiKey}&rating=g`;

    fetch(apiUrl)
      .then(response => response.json())
      .then(data => setGifs(data.data.slice(0, 3)))
      .catch(error => console.error('Error fetching gifs:', error));
  };

  return (
    <div>
      <GifSearch onSubmit={fetchGifs} />
      <GifList gifs={gifs} />
    </div>
  );
}

export default GifListContainer;
