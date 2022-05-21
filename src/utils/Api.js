import axios from 'axios';

const API_KEY = 'ffd5a68f310fbca5540f36a93b4a23e3';
const BASE_URL = {
  trending: 'https://api.themoviedb.org/3/trending/movie/day',
  searched: 'https://api.themoviedb.org/3/search/movie',
  movie: 'https://api.themoviedb.org/3/movie/'
} ;


export const getTrendingApi = () => {
  return (axios.get(BASE_URL.trending, {
    params: {
      api_key: API_KEY,
      page: 1,
    }
  }))
}

export const getSearchedApi = (searchedMovie) => {
  return (axios.get(BASE_URL.searched, {
    params: {
      api_key: API_KEY,
      query: searchedMovie
    }
  }))
}

export const getMovieApi = (id) => {
  return (axios.get(BASE_URL.movie + id, {
    params: {
      api_key: API_KEY,
    }
  }))
}

export const getCastApi = (id) => {
  return (axios.get(BASE_URL.movie + id + '/credits', {
    params: {
      api_key: API_KEY,
    }
  }))
}

export const getReviewApi = (id) => {
  return (axios.get(BASE_URL.movie + id +'/reviews', {
    params: {
      api_key: API_KEY,
    }
  }))
}