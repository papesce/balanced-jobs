import React from "react";
import JobCardGrid from "./JobCardGrid";
import { action } from "@storybook/addon-actions";
import { offer1 } from "./Job.utils";

export default {
  title: "JobCard/JobCardGrid",
};


export const jobCardGrid = () => (
  <JobCardGrid
    offer={offer1}
    handleDeleteJob={action("delete job")}
    handleEditJob={action("edit job")}
  />
);
