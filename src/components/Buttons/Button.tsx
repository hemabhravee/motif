import { Button } from '@material-ui/core';
import * as React from 'react';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Props {}

const CustomButton: React.FunctionComponent<Props> = () => (
  <Button variant="contained" role="button">
    Click Here
  </Button>
);

export default CustomButton;
