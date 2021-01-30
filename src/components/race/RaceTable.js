import React from 'react'

function RaceTable({ race }) {

  const tableInfo = [
    { title: "Classification", info: race.classification },
    { title: "designation", info: race.designation },
    { title: "Skin hues", info: race.skin_colors },
    { title: "Average height", info: race.average_height },
    { title: "Average lifespan", info: race.average_lifespan },
    { title: "Language", info: race.language }
  ];

  return (
    <div className="grid md:grid-cols-4 grid-cols-1">
      <div className="col-span-1">
        <h2>Class</h2>
      </div>
      <div className="md:col-span-3 col-span-1 grid grid-cols-2">
        {tableInfo.map(data => (
          data.info !== "n/a" &&
          <div className="mb-8">
            <div className="uppercase text-xs font-bold text-gray-600">{data.title}</div>
            <div className="text-xl font-extralight">{data.info}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default RaceTable;
