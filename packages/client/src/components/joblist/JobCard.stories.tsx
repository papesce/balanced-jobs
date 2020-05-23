import React from "react";
import JobCard from "./JobCard";
import { offer1 } from "./Job.utils";
import { action } from "@storybook/addon-actions";

export default {
  title: "Home/Home/JobCard",
};

export const jobCard = () => (
  <JobCard
    offer={offer1}
    handleDeleteOffer={action("delete")}
    handleEditOffer={action("edit")}
  />
);
