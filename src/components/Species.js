import React, { Fragment, useState, useEffect } from 'react'
import { Box } from 'grommet';
import Loading from './Loading';
import SpeciesBox from './SpeciesBox';

function Species() {
  const [species, setSpecies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {

    const getSpecies = () => {
      const urls = [
        'https://swapi.dev/api/species/',
        'https://swapi.dev/api/species/?page=2',
        'https://swapi.dev/api/species/?page=3',
        'https://swapi.dev/api/species/?page=4'
      ]
      return Promise.all(
        urls.map(url =>
          fetch(url)
            .then(res => res.json())
        ))
        .then(data => data)
        .catch(err => {
          if (err) setIsError(true);
        })
    }

    const speciesAyncFunction = async () => {
      setIsLoading(true);
      const speciesData = await getSpecies();
      console.log(speciesData);
      let urlResults = speciesData.map(d => d.results).flat();
      setSpecies(urlResults)
      setIsLoading(false);
    }
    speciesAyncFunction();


  }, [setSpecies, setIsLoading, setIsError]);


  return (
    <Fragment>
      {isError && <div>Got an erro neebor</div>}
      {isLoading && !isError ? (
        <Loading />
      ) : (
          <Fragment>
            <Box
              direction="row"
              wrap={true} >
              {species.map((race, i) => (
                <SpeciesBox race={race} i={i} />
              ))}
            </Box>
          </Fragment>
        )
      }
    </Fragment >
  )
}

export default Species; 
