import React,{useState, useEffect} from 'react';
import './App.css';
import Header from './components/header';
import MovieGrid from './components/movieGrid';
import Search from './components/Search.js';

const App = () => {
  const[items,setItems] = useState([])
  const[isLoading,setIsLoading] = useState(true);
  const[query, setQuery] = useState('')
  
  useEffect(() => {
    const fetchItems = async () => {
      let result = await fetch(`http://www.omdbapi.com/?&apikey=5c677186&s=man`);
      const data =  await result.json();
      let movies = data.Search;
    //  movies.forEach((movie) => {
    //    output += movie.Title;
    //  });

    //  movies.map((movie) => {
    //   console.log(movie);
    //  })
    console.log(data.Search);
    //   console.log(typeof output);

      setItems(movies);
      setIsLoading(false)
    }

    fetchItems()
    
  },[query])

  const search = SearchValue =>{

  }

  return (
    <div className="container">
      <Header />
      <Search getQuery={(q) => setQuery(q)}/>
      <MovieGrid isLoading={isLoading} items={items}/>
    </div>
  );
}

export default App;
