import React from "react";
import Card from "@material-ui/core/Card";
import "./JobCard.css";
import { CardContent } from "@material-ui/core";
import JobCardGrid from "./JobCardGrid";
import { IOffer } from "balanced-jobs-model";

interface IJobCardProps {
  offer: IOffer;
  handleEditOffer: (id: string) => void;
  handleDeleteOffer: (id: string) => void;
}

const JobCard = (props: IJobCardProps) => {
  const { handleDeleteOffer, handleEditOffer, offer } = props;
  return (
    <Card className='jobcard-card'>
      <CardContent>
        <JobCardGrid
          offer={offer}
          handleEditJob={handleEditOffer}
          handleDeleteJob={handleDeleteOffer}
        />
      </CardContent>
    </Card>
  );
};

export default JobCard;
