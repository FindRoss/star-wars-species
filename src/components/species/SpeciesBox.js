import React from 'react';
import { Link } from 'react-router-dom';

function SpeciesBox({ race, i }) {

  const numberFromUrl = (raceUrl) => raceUrl.replace("http://swapi.dev/api/species/", "");

  return (
    <>
      <Link to={`/species/${numberFromUrl(race.url)}`}>
        <div key={i} className="px-5 py-8 rounded-lg shadow-md font-semibold bg-blue-300 dark:bg-gray-800 dark:text-white">
          <div>
            <h2>{race.name}</h2>
          </div>
        </div>
      </Link>
    </>
  )
}

export default SpeciesBox; 
