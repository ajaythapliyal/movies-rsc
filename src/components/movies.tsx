import { getMovies } from "../data-service.js";
import styles from "./movies.module.css";

export default async function Movies() {
  const movies = await getMovies();
  return (
    <main className={styles.moviesContainer}>
      {movies.map((movie) => (
        <div key={movie.id}>
          <img src={movie.posterUrl} />
        </div>
      ))}
    </main>
  );
}
