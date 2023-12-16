import { useEffect, useState, useRef } from 'react';
import { Link, Outlet, useParams, useLocation } from 'react-router-dom';
import { getMovieById } from "utils/searchDataMovie";
import { BackLink } from "components/BackLink/backLink";
import { nanoid } from 'nanoid';
import MovieItem from "../MovieItem/movieItem";

const Movie = () => {
  const [movie, setMovie] = useState(null);
  const { id } = useParams();
  const location = useLocation()
  const backLinkHref = location.state?.from ?? '/';
  const backLinkHrefRef = useRef(backLinkHref);

  useEffect(() => {
    const getMovie = async () => await getMovieById(id)
      .then(res => setMovie(res))
    
      getMovie()       
  }, [id]);

  return (
    <div>
      <BackLink to={backLinkHrefRef.current}>{`<-`} Back to movies</BackLink>
      <div> {movie && <MovieItem movie={movie} />}</div>
      <div>
        <div>
          <h4>Additional Information</h4>
          <ul>
            <li key={nanoid()}>
              <Link to='cast' >
                Cast
              </Link>
            </li>
            <li key={nanoid()}>
              <Link to='reviews' >
                Reviews
              </Link>
            </li>
          </ul>
        </div>
        <Outlet />
      </div>
    </div>
  );
  }

export default Movie;