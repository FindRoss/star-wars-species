import React from 'react';

import { Link } from "react-router-dom";
import Species from './Species';

import { Grid } from 'grommet-icons';
import { Box, Anchor, CheckBox, Heading } from 'grommet';

function Nav({ darkMode, handleDarkToggle }) {

  return (
    <Box
      flex={true}
      wrap={true}
      direction="row"
      justify="between"
      align="center"
      pad="medium"
      background="customNavBg"
    >
      <Box>
        <Heading
          responsive={true}
          style={{ lineHeight: "0.73em" }}
        >
          Star<br />Wars<br />Species.</Heading>
      </Box>
      <Box
        flex={true}
        wrap={true}
        direction="row"
        align="center"
        justify="end"
        gap="medium"
      >
        <Link to="/" exact componen={Species}>
          <Anchor
            icon={<Grid />}
            label="Species"
            size="medium"
          />
        </Link>
        <CheckBox
          label="Light/Dark"
          toggle={true}
          color="dark-3"
          checked={darkMode}
          onChange={(event) => handleDarkToggle(event.target.checked)}
        />
      </Box>
    </Box>
  )
}

export default Nav; 
