export default class TheMovieDbAPI {
  apiBaseUrl = 'http://api.themoviedb.org/3';

  constructor(apiKey) {
    this.apiKey = apiKey;
  }

  getGenres = async () => {
    const response = await fetch(`${this.apiBaseUrl}/genre/movie/list?api_key=${this.apiKey}`);
    return response.json();
  };

  getPopularMovies = async (page = 1) => {
    const response = await fetch(`${this.apiBaseUrl}/movie/popular?api_key=${this.apiKey}`);
    return response.json();
  };

  getMovie = async (id) => {
    const response = await fetch(
      `${this.apiBaseUrl}/movie/${id}?api_key=${this.apiKey}&append_to_response=recommendations`
    );
    return response.json();
  };

  searchMovies = async (query) => {
    const response = await fetch(`${this.apiBaseUrl}/search/movie?api_key=${this.apiKey}&query=${query}`);
    return response.json();
  };
}
