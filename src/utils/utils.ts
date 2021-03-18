import Movie from "../types/Movie";
import { posterBaseUrl } from "../services/movies.api";

export function mapResultToType(res: any[]): Movie[] {
  return res.map((movie) => {
    const {
      id,
      title,
      vote_average,
      overview,
      poster_path,
      release_date,
    } = movie;
    return {
      id,
      title,
      date: release_date,
      rating: vote_average,
      overview,
      poster: poster_path ? `${posterBaseUrl}${poster_path}` : undefined,
    };
  });
}
