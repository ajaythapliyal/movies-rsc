import { getMovies } from "../data-service.js";
import styles from "./movies.module.css";
import Pagination from "./pagination.js";

export default async function Movies() {
  const page = 1;
  const movies = await getMovies(page);
  return (
    <main>
      <div className={styles.moviesContainer}>
        {movies.map((movie) => (
          <div key={movie.id}>
            <img
              src={movie.posterUrl}
              loading="lazy"
              width={200}
              height={300}
            />
          </div>
        ))}
      </div>
      <Pagination page={page} />
    </main>
  );
}
