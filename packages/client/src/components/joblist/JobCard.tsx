import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import './JobCard.css';
import { CardContent } from '@material-ui/core';
import JobCardGrid  from './JobCardGrid';


const  JobCard = () => {

  return (
    <Card >
      <CardContent>
        <JobCardGrid />
      </CardContent>
    </Card>
  );
}

export default JobCard;