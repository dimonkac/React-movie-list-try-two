export default class Api {
  static url = "http://api.themoviedb.org/3";

  static key = "ebea8cfca72fdff8d2624ad7bbf78e4c";

  static poster_url = "http://image.tmdb.org/t/p/w342";

  static getMovies({ page }) {
    return new Promise(async (res, rej) => {
      const result = await fetch(
        `${Api.url}/movie/now_playing?api_key=${Api.key}&language=en-US&page=${page}`
      );
      if (result.status === 200) {
        res(await result.json());
      } else {
        rej(await result.text());
      }
    });
  }
  static getMoviesMore(id) {
    return new Promise(async (res, rej) => {
      const result = await fetch(
        `${Api.url}/movie/${id}?api_key=${Api.key}&language=en-US`
      );
      if (result.status === 200) {
        res(await result.json());
      } else {
        rej(await result.text());
      }
    });
  }
}
