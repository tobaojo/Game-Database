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
      let result = await fetch(`https://cors-anywhere.herokuapp.com/https://www.freetogame.com/api/games`);
      const data =  await result.json();
      let games = data;
   
      console.log(data)
      setItems(games);
      setIsLoading(false)
    }

    fetchItems()
    
  },[])


  return (
    <div className="container">
      <Header />
      <Search getQuery={(q) => setQuery(q)}/>
      <MovieGrid isLoading={isLoading} items={items}/>
    </div>
  );
}

export default App;
