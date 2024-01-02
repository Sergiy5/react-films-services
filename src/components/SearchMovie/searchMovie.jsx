import { useSearchParams } from 'react-router-dom';
import { useState } from 'react';
import {searchMovie} from "utils/searchDataMovie"
import ListMovies from 'components/ListMovies/listMovies';
import { useEffect } from 'react';


const SearchMovie = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovie] = useState([]);
  const search = searchParams.get('query') ?? '';
  const [query, setQuery] = useState(search);

  // console.log('movies', movies);
  // console.log('query', query);
  
  useEffect(() => {
    if (query??search){
   searchMovie(query).then(res =>     
      setMovie(res.data.results))
    }
    
  }, [query, search])
  
  const handleSubmit = (e) => {
    e.preventDefault()
    const query = e.target.query.value.trim()
    setQuery(query);
  }
  
  const handleChange = ({ target }) => {
    setSearchParams({query: target.value});
  };
  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          name="query"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
          value={search}
          onChange={handleChange}
          type="text"
        />
        <button type="submit">submit</button>
      </form>
      {movies && <ListMovies movies={movies} />}
    </div>
  );
    }

export default SearchMovie