import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import { green } from '@material-ui/core/colors';
import Button from '@material-ui/core/Button';
import './NewJobButton.css';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
  },
  wrapper: {
    margin: theme.spacing(1),
    position: 'relative',
  },
  buttonProgress: {
    color: green[500],
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -12,
    marginLeft: -12,
  },
}));

interface INewJobButtonProps {
  creating: boolean;
  handleButtonClick: () => void;
}

export default function NewJobButton(props: INewJobButtonProps) {
  const classes = useStyles();

  return (
    <div className='new-job-button'>
    <div className={classes.root}>
      <div className={classes.wrapper}>
        <Button
          variant="contained"
          color="primary"
          disabled={props.creating}
          onClick={props.handleButtonClick}
        >
          New Job Offer
        </Button>
        {props.creating && <CircularProgress size={24} className={classes.buttonProgress} />}
      </div>
    </div>
    </div>
  );
}