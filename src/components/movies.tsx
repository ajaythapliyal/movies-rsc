import { getMovies } from "../data-service.js";

export default async function Movies() {
  const movies = await getMovies();
  return (
    <>
      {movies.map((movie) => (
        <div>{movie.title}</div>
      ))}
    </>
  );
}
