import React, { Fragment } from 'react';
import { Box, Heading } from 'grommet';
import { Link } from 'react-router-dom';

function SpeciesBox({ race, i }) {

  const numberFromUrl = (speciesUrl) => {
    let getIdFromUrl = speciesUrl.replace("https://swapi.co/api/species", "");
    return getIdFromUrl;
  }

  return (
    <Fragment>
      <Box
        key={i}
        width="small"
        background="customBoxBg"
        animation={{
          "type": "fadeIn",
          "delay": 0,
          "duration": 800,
          "size": "xsmall"
        }}
        border={{
          "color": "customBorder",
          "size": "medium",
          "style": "solid",
          "side": "all"
        }}
        round={{
          "size": "small",
          "corner": "top-left",
        }}
        flex="grow"
        pad="large"
        margin="xsmall" >
        <Link to={`/species${numberFromUrl(race.url)}`}>
          <Heading level="4" color="customAnchorColor">{race.name}</Heading>
        </Link>
      </Box>
    </Fragment>
  )
}

export default SpeciesBox; 
