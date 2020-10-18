import React, { Fragment, useEffect, useState } from 'react';
import Loading from './Loading';
import { Box, Text, Heading } from 'grommet';



function Race({ match }) {

  const [race, setRace] = useState({});
  const [films, setFilms] = useState({ results: [] });
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    const fetchRace = async () => {
      setIsLoading(true);
      try {
        const race = await fetch(`https://swapi.co/api/species/${match.params.id}/`);
        const allFilm = await fetch('https://swapi.co/api/films/');
        const raceData = await race.json();
        const sevenFilms = await allFilm.json();
        setRace(raceData);
        setFilms(sevenFilms);
      } catch (err) {
        console.log(err);
        setIsError(true);
      }
      setIsLoading(false);
    }
    fetchRace();
  }, [match.params.id])

  const allFilms = [...films.results];
  const filmFinder = (raceFilms) => {
    const matchingFilms = allFilms.filter(film => raceFilms.includes(film.url));
    return matchingFilms;
  }

  const {
    name,
    classification,
    designation,
    skin_colors,
    average_height,
    average_lifespan,
    language } = race;

  return (
    <Fragment>
      {isError && <div>Got an erro neebor</div>}
      {isLoading && !isError ? (
        <Loading />
      ) : (
          <Box>
            <h1>{name}</h1>
            <Box margin={{ "vertical": "small" }}>
              <Text size="medium">Classification</Text>
              <Text size="large" weight="bold">{classification}</Text>
            </Box>
            <Box margin={{ "vertical": "small" }}>
              <Text size="small">Designation</Text>
              <Text size="medium" weight="bold">{designation}</Text>
            </Box>
            <Box margin={{ "vertical": "small" }}>
              <Text size="small">Skin Color</Text>
              <Text size="medium" weight="bold">{skin_colors}</Text>
            </Box>
            <Box margin={{ "vertical": "small" }}>
              <Text size="small">Average Height</Text>
              <Text size="medium" weight="bold">{average_height}</Text>
            </Box>
            <Box margin={{ "vertical": "small" }}>
              <Text size="small">Average Lifespan</Text>
              <Text size="medium" weight="bold">{average_lifespan}</Text>
            </Box>
            <Box margin={{ "vertical": "small" }}>
              <Text size="small">Language</Text>
              <Text size="medium" weight="bold">{language}</Text>
            </Box>
            <div>
              <Heading level="3">Films {name} appear in </Heading>
              {filmFinder(race.films).map((film, i) => (<Text size="medium" weight="bold" key={i}>{film.title}</Text>))}
            </div>
          </Box>
        )
      }
    </Fragment >
  )
}




export default Race;
