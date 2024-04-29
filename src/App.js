import { useEffect } from "react";

const Movie_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=c068369";

const App = () => {

  const searchMovies = async (title) => {
    try {
      const response = await fetch(`${Movie_URL}&s=${title}`);
      const data = await response.json();
      console.log(data.Search);
    } catch (error) {
      
    } finally {

    }
  }
  
  useEffect(() => {
    searchMovies('Spiderman');
  }, []);
  
  return (
    <div>
      Filmora
    </div>
  );
}

export default App;
