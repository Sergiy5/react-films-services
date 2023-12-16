import { nanoid } from "nanoid";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieReviews } from "utils/searchDataMovie";

const Reviews = () => {
    const [reviewsMovie, setReviewsMovie] = useState([]);
    const { id } = useParams();
    useEffect(() => {
      const reviews = async () =>
        await getMovieReviews(id).then(res => setReviewsMovie(res.results));
      reviews();
    }, [id]);
   
  return (
    <ul>
    {reviewsMovie.map(({ author, content }) => {
      return (
        <li key={nanoid()}>
      <h5>Author: {author}</h5>
      <p>{content}</p>
    </li>);
  })}
  </ul>);
}
export default Reviews;