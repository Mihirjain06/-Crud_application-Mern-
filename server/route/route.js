async function logMovies() {
  const response = await fetch("http://localhost:5000");
  const movies = await response.json();
  console.log(movies);
}

logMovies();
