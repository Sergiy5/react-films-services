import { Link, useLocation } from 'react-router-dom';

const ListMovies = ({ movies }) => {
  const location = useLocation()
  
    return (
      <ul>
        {movies.map(({ title, id, name }) => {
          return (
            <li key={id}>
              <Link to={`/movies/${id}`} state={{ from: location }}>
                {title ? title : name}
              </Link>{' '}
            </li>
          );
        })}
      </ul>
    );
}
export default ListMovies