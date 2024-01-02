import ListMovies from 'components/ListMovies/listMovies';
import { useState, useEffect } from 'react';
import { trendMovies } from "utils/searchDataMovie";


const Home = () => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    trendMovies().then(({data}) =>
    {
      console.log('trendM', data);
      setMovies(data.results);
    });
  }
  , []
  );
  // console.log(movies);
  return <>{movies && <ListMovies movies={movies} />}</>;
}

export default Home;