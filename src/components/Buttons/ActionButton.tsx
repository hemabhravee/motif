import { Button, makeStyles } from '@material-ui/core';
import * as React from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(1),
    marginTop: theme.spacing(2),
    width: theme.spacing(40)
  },
  text: {
    fontFamily: 'Karla',
    fontWeight: 700,
    textTransform: 'none'
  }
}));

interface IActionButtonProps {
  text: string;
  link?: string;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  onClick?: () => void;
}

const ActionButton: React.FC<IActionButtonProps> = ({
  text,
  link = '',
  startIcon = null,
  endIcon = null,
  onClick
}) => {
  const classes = useStyles();
  return (
    <Button
      className={classes.root}
      variant="outlined"
      color="primary"
      size="large"
      startIcon={startIcon}
      endIcon={endIcon}
      href={link}
      target="_blank"
      onClick={onClick}
    >
      {text}
    </Button>
  );
};

export default ActionButton;
