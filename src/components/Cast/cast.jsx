import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieCredits } from "utils/searchDataMovie";

const Cast = () => {
    const[castMovie, setCastMovie] = useState([])
    const { id } = useParams();
    // console.log(id)
    useEffect(()=> {
        const credits = async () =>
          await getMovieCredits(id).then(res => {return setCastMovie(res.cast)});
        credits()
    }, [id])

    return (
      <ul>
            {castMovie.map(({ name, id, character, profile_path }) => {
            const poster = profile_path
      ? `https://image.tmdb.org/t/p/w200/${profile_path}`
                    : '';
           return (<li key={id}>
            <img src={poster} alt="No poster" />
            <h4>{name}</h4>
            <p>
              {name}/{character}
            </p>
          </li>)
        })}
      </ul>
    );
    
}
export default Cast;