interface MovieResponse {
  id: number;
  title: string;
  poster_path: string;
}

interface Movie {
  id: number;
  title: string;
  posterUrl: string;
}

export async function getMovies(): Promise<Array<Movie>> {
  const MOVIES_URL = `${import.meta.env.VITE_BASE_URL}/discover/movie?api_key=${
    import.meta.env.VITE_API_KEY
  }&include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc`;
  const response = await fetch(MOVIES_URL);
  const responseData = await response.json();
  const movieResponse = responseData.results as Array<MovieResponse>;
  return movieResponse.map((movie) => ({
    id: movie.id,
    title: movie.title,
    posterUrl: `${import.meta.env.VITE_BASE_IMG_URL}/w200/${movie.poster_path}`,
  }));
}
