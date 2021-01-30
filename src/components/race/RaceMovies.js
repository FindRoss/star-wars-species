import React from 'react'
import { posters } from './data.js';

function RaceMovies({ films }) {



  return (
    <div className="grid md:grid-cols-4 grid-cols-1">
      <div className="col-span-1">
        <h2>Appears in</h2>
      </div>
      <div className="md:col-span-3 col-span-1 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {
          films.map((film, i) => (
            <div key={i} className="border rounded-lg">
              <div className="p-4">{film.title}</div>
              <div><img className="rounded-b-lg" src={posters[film.episode_id - 1]} alt={film.title} /></div>
            </div>
          ))
        }
      </div>
    </div>
  )
}


export default RaceMovies
