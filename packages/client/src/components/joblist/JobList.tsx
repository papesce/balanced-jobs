import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import JobCard from "./JobCard";
import { IOffer } from "balanced-jobs-model";
import CircularProgress from "@material-ui/core/CircularProgress";
import { Typography } from "@material-ui/core";

interface IJobListProps {
  offers: IOffer[];
  editOffer: (id: string) => void;
  deleteOffer: (id: string) => void;
  loading?: boolean;
}

const JobList = (props: IJobListProps) => {
  const { offers, editOffer, deleteOffer, loading = false } = props;
  if (loading) return <CircularProgress />;
  if (offers.length === 0) return <Typography variant={'subtitle2'}>No offers</Typography>;
  return (
    <List>
      {offers.slice(0,5).map((offer: IOffer) => (
        <ListItem key={offer._id}>
          <JobCard
            offer={offer}
            handleEditOffer={editOffer}
            handleDeleteOffer={deleteOffer}
          ></JobCard>
        </ListItem>
      ))}
      {offers.length > 5 && 
      <ListItem key={6}>
        <Typography variant="subtitle2">more...</Typography>
      </ListItem>}
    </List>
  );
};

export default JobList;
