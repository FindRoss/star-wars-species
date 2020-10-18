import React, { Fragment } from 'react';
import { Box, Meter, Stack, Text } from 'grommet';

function Loading() {
  return (
    <Fragment>
      <Box
        direction="row"
        align="center"
        height="80vh"
        justify="center"
      >
        <Stack anchor="center">
          <Meter
            type="circle"
            size="small"
            thickness="xsmall"
            values={[{
              value: 100,
              label: 'loaded',
            }]}
          />
          <Text>loading</Text>
        </Stack>
      </Box>
    </Fragment>
  )
}

export default Loading; 
