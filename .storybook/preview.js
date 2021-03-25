//.storybook/preview.js

import { Box } from '@material-ui/core';
import { muiTheme } from 'storybook-addon-material-ui';

export const decorators = [
  muiTheme(),
  (Story) => (
    <Box m={2}>
      <Story />
    </Box>
  )
];
