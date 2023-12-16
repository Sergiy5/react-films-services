import { Route, Routes } from "react-router-dom";
import { lazy } from 'react';
import Layout from "./Layout/layout";
import NotFound from "./NotFound/notFound";
const HomePage = lazy(() => import("pages/HomePage"));
const MoviePage = lazy(() => import('pages/MoviePage'));
const Movie  = lazy(() => import( "./Movie/movie"));
const Cast  = lazy(() => import( "./Cast/cast"));
const Reviews = lazy(() => import('./Reviews/reviews'));

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="movies" element={<MoviePage />} />
          <Route path="movies/:id" element={<Movie />}>
            <Route path="cast" element={<Cast />} />  
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
};
