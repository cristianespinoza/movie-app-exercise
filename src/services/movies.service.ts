import Movie from "../types/Movie";
import { mapResultToType } from "../utils/utils";
import { movieApiBaseUrl } from "./movies.api";

export function listMovies(search: string = "war"): Promise<Movie[]> {
  return fetch(
    `${movieApiBaseUrl}/search/movie?query=${search}&api_key=${process.env.REACT_APP_API_KEY}`
  )
    .then((res) => res.json())
    .then((response) => mapResultToType(response.results))
    .catch((_) => {
      return [];
    });
}
