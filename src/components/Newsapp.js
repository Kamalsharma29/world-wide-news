import React, { useEffect, useState } from 'react';
import Card from './Card';

function Newsapp() {
  const [search, setSearch] = useState('india');
  const [newsData, setNewsData] = useState(null);

  const API_KEY = '76bd28d946aa48f99db91e5bef023453';

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(`https://newsapi.org/v2/everything?q=${search}&apiKey=${API_KEY}`);
      const jsonData = await response.json();
      console.log(jsonData.articles);
      setNewsData(jsonData.articles);
    };
    getData();
  }, [search]);

  const handleInput = (e) => {
    console.log(e.target.value);
    setSearch(e.target.value);
  };

  return (
    <div>
      <nav>
        <div>
          <h1>World-wide News</h1>
        </div>
        <ul>
          <button>All News</button>
          <button>Trending</button>
        </ul>
        <div className="searchBar">
          <input type="text" placeholder="Search News" value={search} onChange={handleInput} />
          <button onClick={() => setSearch(search)}>Search</button>
        </div>
      </nav>
      <div>
        <p className="para">Stay updated with World-wide News</p>
      </div>
      <div className="categoryBtn">
        <button onClick={() => setSearch('sports')}>Sports</button>
        <button onClick={() => setSearch('politics')}>Politics</button>
        <button onClick={() => setSearch('entertainment')}>Entertainment</button>
        <button onClick={() => setSearch('health')}>Health</button>
        <button onClick={() => setSearch('fitness')}>Fitness</button>
      </div>
      <div>{newsData ? <Card data={newsData} /> : null}</div>
    </div>
  );
}

export default Newsapp;
