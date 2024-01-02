import axios from 'axios';
// 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5OGU5MzBjMmZhNzRjYWVhNjRmMjAyNmNmNzBlYzQxMyIsInN1YiI6IjY0NmQwNWJhZDE4NTcyMDE4MDJlOGYyOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gvC078v2ZEDlsUKlhf6XJhVHnGo7gwYMbWV5S3NVSKY';

const API_KEY = 'k_yjb6zjrs';
const BASE_URL = 'https://api.themoviedb.org/3';
const Most_Popular_Movies = `${BASE_URL}/MostPopularMovies/${API_KEY}`;
const TREND_URL = `/trending/all/day`;
const SEARCH_URL = `/search/movie`;
const ID_URL = `/movie`;

axios.defaults.baseURL = BASE_URL; 

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5OGU5MzBjMmZhNzRjYWVhNjRmMjAyNmNmNzBlYzQxMyIsInN1YiI6IjY0NmQwNWJhZDE4NTcyMDE4MDJlOGYyOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gvC078v2ZEDlsUKlhf6XJhVHnGo7gwYMbWV5S3NVSKY',
  },
};

export async function trendMovies(page = 1) {
  const response = await axios.get(TREND_URL, options);
  return response

}

export async function mostPopularMovies(page = 1) {
  return await fetch(Most_Popular_Movies)
    .then(response => {
      console.log(response)
      return response.json();
    })
    .catch(error => console.log(error));
}

export async function getMovieById(id) {
  try {
    const data = await axios.get(
      `${ID_URL}/${id}?api_key=${API_KEY}&language=en-US`,
      options )
      return data;
    
  } catch (error) {
    console.log(error)
     alert(error.message);
  }
}

export async function searchMovie(query, page = 1) {
  try {
    return await axios.get(
      `${SEARCH_URL}?api_key=${API_KEY}&language=en-US&query=${query}&page=${page}`,
      options
    )
  } catch (error) {
    alert(error.message);
  }
}

export async function getMovieCredits(id) {
  try {
    const data = await fetch(
      `${ID_URL}/${id}/credits?api_key=${API_KEY}&language=en-US`,
      options
    ).then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error();
    });
    return data;
  } catch (error) {
    alert('Тут зовсім порожньо');
  }
}

export async function getMovieReviews(id) {
  try {
    const data = await fetch(
      `${ID_URL}/${id}/reviews?api_key=${API_KEY}&language=en-US`,
      options
    ).then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error();
    });
    return data;
  } catch (error) {
    alert('Тут зовсім порожньо');
  }
}
// return Promise.reject(new Error(`За запитом ${query} нічого не знайдено`));

//======== Інший АРІ для отримання рейтингу===========

// const API_KEY = '98e930c2fa74caea64f2026cf70ec413';
// const BASE_URL = 'https://imdb-api.com/en/API';
//  const optionsAxios = {
//    method: 'GET',
//     url: 'http://www.omdbapi.com/?apikey=92a2488e',
//    url: 'http://www.omdbapi.com/?apikey=92a2488e&s=t&page=2',
//    params: { country: 'UA' },
//    headers: {
//      'X-RapidAPI-Key': '6d6fc46c1amshc0b8f4783759597p10d698jsna0b62de4f768',
//      'X-RapidAPI-Host': 'imdb188.p.rapidapi.com',
//    },
//  };
// export async function getFanFavorites() {
// try {
//   const response = await axios.request(optionsAxios);
//   // return response;
//   console.log(response);
// } catch (error) {
//   console.error(error);
// }  
// }