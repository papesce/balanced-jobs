import React from "react";
import JobCardMenu from "./JobCardMenu";
import { action } from "@storybook/addon-actions";

export default {
  title: "JobCard/JobCardMenu",
};

export const jobCardMenu = () => (
  <JobCardMenu
    id={"1"}
    handleEdit={action("edit")}
    handleDelete={action("delete")}
  />
);
