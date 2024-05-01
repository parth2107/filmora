import { useEffect, useState } from "react";
import "./App.css"
import SeachIcon from "./search.svg"
import MovieCard from "./MovieCard";
const Movie_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=c068369";

const App = () => {

  const [movies, setMovies] = useState([]);
  const [searchStr, setSearchStr] = useState("");

  const searchMovies = async (title) => {
    try {
      const response = await fetch(`${Movie_URL}&s=${title}`);
      const data = await response.json();
      console.log(data.Search);
      setMovies(data.Search);
    } catch (error) {
      
    } finally {

    }
  }
  
  useEffect(() => {
    searchMovies("");
  }, []);
  
  return (
    <div className="app">
      <h1>FILMora</h1>
      <div className="search">
        <input 
          placeholder="Search for movies"
          value={searchStr}
          onChange={(e) => {setSearchStr(e.target.value)}}
        />
        <img 
          src={SeachIcon}
          alt="search"
          onClick={() => {searchMovies(searchStr)}}
        />
      </div>

      {movies?.length > 0 
      ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard 
              movie={movie}
            />
          ))}
        </div>
      ):(
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
}

export default App;
