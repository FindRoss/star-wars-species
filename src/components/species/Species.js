import React, { useState, useEffect } from 'react'
import { getSpecies } from './SpeciesAPI';
import SpeciesBox from './SpeciesBox';
import Loading from '../Loading';
import Error from '../Error';
import Container from '../Container';

function Species() {
  const [nextPageUrl, setNextPageUrl] = useState('')
  const [species, setSpecies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState({ error: false, msg: "Yes there is some sort of error but I am not getting any input" });

  useEffect(() => {
    async function call() {
      try {
        setIsLoading(true);
        const data = await getSpecies('https://swapi.dev/api/species/');
        const { next, results } = data;
        setSpecies(results)
        setNextPageUrl(next)
      } catch (err) {
        console.log("Console logging error from species", err)
        setIsError({ error: true, msg: err });
      }
    }
    call();

    setIsLoading(false);
  }, []);

  async function getMoreSpecies(url) {
    try {
      setIsLoading(true);
      const data = await getSpecies(url);
      const { next, results } = data;
      setNextPageUrl(next);
      setSpecies([...species, ...results])

    } catch (err) {

      setIsError({ err: true })
    }
    setIsLoading(false);
  }

  const moreButton = (
    <div className="py-8 flex justify-center">
      <button className="py-2 px-4 rounded-lg shadow-lg text-white bg-green-600 hover:bg-green-700 dark:bg-red-600 dark:hover:bg-red-500" onClick={() => getMoreSpecies(nextPageUrl)}>More</button>
    </div>
  );


  return (
    <div>
      <Container contClasses="py-8">

        {isError.error && <Error msg={isError.msg} />}

        {(!isError.error) && (
          <>
            <div className="py-8 grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {species.map((race, i) => (
                <SpeciesBox race={race} key={i} />
              ))}
            </div>
            {isLoading && <Loading />}
          </>
        )}

        {nextPageUrl && moreButton}

      </Container>
    </div>
  )
}

export default Species; 
