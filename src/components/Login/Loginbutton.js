import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import {Link} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function IconButtons() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <Link to="/">
            <IconButton color="secondary" aria-label="add to shopping cart" size="large" style={{outline:'none'}}>
            <PowerSettingsNewIcon />
            </IconButton>
        </Link>
    </div>
  );
}
