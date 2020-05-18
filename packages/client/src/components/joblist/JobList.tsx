import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import JobCard from "./JobCard";
import { IOffer } from "balanced-jobs-model";

interface IJobListProps {
  offers: IOffer[];
  editOffer: (id: string) => void;
  deleteOffer: (id: string) => void;
}

const JobList = (props: IJobListProps) => {
  const { offers, editOffer, deleteOffer } = props;
  return (
    <List>
      {offers.map((offer: IOffer) => (
        <ListItem key={offer._id}>
          <JobCard
            offer={offer}
            handleEditOffer={editOffer}
            handleDeleteOffer={deleteOffer}
          ></JobCard>
        </ListItem>
      ))}
    </List>
  );
};

export default JobList;
