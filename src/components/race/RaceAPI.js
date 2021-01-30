export async function getFilms() {
  const allFilm = await fetch('https://swapi.dev/api/films/');
  const sevenFilms = await allFilm.json();
  return sevenFilms;
}

export async function getRace(params) {
  const race = await fetch(`https://swapi.dev/api/species/${params}/`);
  const raceData = await race.json();
  return raceData;
}



// const filmFinder = (raceFilms) => {
//   return [...films.results].filter(film => raceFilms.includes(film.url));
// }


export function filmFinder(allFilms, raceFilms) {
  return allFilms.results.filter(film => raceFilms.includes(film.url));
}

