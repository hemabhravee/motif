//.storybook/preview.js

import { Box } from '@material-ui/core';
import { muiTheme } from 'storybook-addon-material-ui';
import theme from './theme';

export const decorators = [
  muiTheme(theme),
  (Story) => (
    <Box m={2}>
      <Story />
    </Box>
  )
];
