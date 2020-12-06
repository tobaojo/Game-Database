import React,{useState, useEffect} from 'react';
import './App.css';
import Header from './components/header';
import MovieGrid from './components/movieGrid'

const App = () => {
  const[items,setItems] = useState([])
  const[isLoading,setIsLoading] = useState(true);
  
  useEffect(() => {
    const fetchItems = async () => {
      const result = await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=5c677186&s=harry_potter`);
      const data =  await result.json();

      
      
      let movies = data.Search;
      let output = '';

     movies.forEach((movie) => {
       output += movie.Title;
     });

    //  movies.map((movie) => {
    //   console.log(movie);
    //  })
    console.log(data.Search);
    //   console.log(typeof output);

      setItems(movies);
      setIsLoading(false)
    }

    fetchItems()
    
  },[])

  return (
    <div className="container">
      <Header />
      <MovieGrid isLoading={isLoading} items={items}/>
    </div>
  );
}

export default App;
