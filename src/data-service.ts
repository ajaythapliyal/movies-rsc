export async function getMovies() {
  const MOVIES_URL = `${import.meta.env.VITE_BASE_URL}/discover/movie?api_key=${
    import.meta.env.VITE_API_KEY
  }&include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc`;
  const response = await fetch(MOVIES_URL);
  const responseData = await response.json();
  return responseData.results as Array<{ id: number; title: string }>;
}
