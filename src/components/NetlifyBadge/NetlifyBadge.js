import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  netlifyBadge: {
    width: '100%',
    textAlign: 'center',
    marginTop: theme.spacing(2),
  },
}));

function NetlifyBadge() {
  const classes = useStyles();

  return (
    <div className={classes.netlifyBadge}>
      <a href="https://www.netlify.com" target="_blank" rel="noopener noreferrer">
        <img
          src="https://www.netlify.com/img/global/badges/netlify-color-accent.svg"
          alt="Deploys by Netlify"
        />
      </a>
    </div>
  );
}

export default NetlifyBadge;
