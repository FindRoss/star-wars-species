import React, { Fragment, useEffect, useState } from 'react';
import Loading from '../Loading';

import { getRace, getFilms, filmFinder } from './RaceAPI';
import RaceTable from './RaceTable';
import RaceMovies from './RaceMovies.js';
import Container from '../Container';

function Race({ match }) {
  const [race, setRace] = useState({});
  const [films, setFilms] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchRace = async () => {
      try {
        setIsLoading(true);
        const raceRes = await getRace(match.params.id);
        const allFilms = await getFilms();
        const raceFilms = filmFinder(allFilms, raceRes.films)
        setRace(raceRes);
        setFilms(raceFilms);
      } catch (err) {
        console.log(err);
        setIsError(true);
      }
      setIsLoading(false);
    }
    fetchRace();
  }, [match.params.id])

  return (
    <Fragment>
      <Container contClasses="py-8">
        {isError && <div>Got an erro neebor</div>}
        {isLoading && !isError ? (
          <Loading />
        ) : (
            <div>
              <h1 className="text-5xl text-blue-500 mb-12">{race.name}</h1>
              <RaceTable race={race} />
              <div className="py-8">
                {films.length !== 0 && <RaceMovies films={films} />}
              </div>
            </div>
          )
        }
      </Container>
    </Fragment>
  )
}




export default Race;
