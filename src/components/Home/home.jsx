import ListMovies from 'components/ListMovies/listMovies';
import { useState, useEffect } from 'react';
import { trendMovies } from "utils/searchDataMovie";
// import { mostPopularMovies } from 'utils/searchDataMovie';


const Home = () => {
    const [movies, setMovies] = useState([])
  console.log(movies)
  useEffect(() => {
        trendMovies().then(data => setMovies(data.results));
    }, []);
  return <>{movies && <ListMovies movies={movies} />}</>;
}

export default Home;