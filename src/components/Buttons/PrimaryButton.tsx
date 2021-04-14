import { Button, ButtonProps, makeStyles } from '@material-ui/core';
import * as React from 'react';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface IButtonProps {
  text: string;
}

const useStyles = makeStyles(() => ({
  primary: {}
}));

const PrimaryButton: React.FC<IButtonProps & ButtonProps> = ({
  text,
  ...props
}) => {
  const classes = useStyles();
  return (
    <Button
      className={classes.primary}
      color="primary"
      role="button"
      {...props}
    >
      {text}
    </Button>
  );
};

export default PrimaryButton;
