import React from "react";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import JobCard from "./JobCard";

const JobList = () => {
  return (<List >
    <ListItem>
      <JobCard></JobCard>
    </ListItem>  
    <ListItem>
      <JobCard></JobCard>
    </ListItem>  
    </List>
  );
};

export default JobList;
