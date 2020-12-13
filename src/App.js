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
      let result = await fetch(`https://movies-tvshows-data-imdb.p.rapidapi.com/`);
      const data =  await result.json();
      let movies = data;
    //  movies.forEach((movie) => {
    //    output += movie.Title;
    //  });

    //  movies.map((movie) => {
    //   console.log(movie);
    //  })
  
    //   console.log(typeof output);
      console.log(data)
      setItems(movies);
      setIsLoading(false)
    }

    fetchItems()
    
  },[])

  // const search = searchValue => {
  //   setLoading(true);
  //   setErrorMessage(null);

  //   fetch(`https://www.omdbapi.com/?s=${searchValue}&apikey=5c677186`)
  //     .then(response => response.json())
  //     .then(jsonResponse => {
  //       if (jsonResponse.Response === "True") {
  //         setMovies(jsonResponse.Search);
  //         setLoading(false);
  //       } else {
  //         setErrorMessage(jsonResponse.Error);
  //         setLoading(false);
  //       }
  //     });
  // 	};

  return (
    <div className="container">
      <Header />
      <Search getQuery={(q) => setQuery(q)}/>
      <MovieGrid isLoading={isLoading} items={items}/>
    </div>
  );
}

export default App;
