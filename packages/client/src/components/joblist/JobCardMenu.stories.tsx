import React from "react";
import JobCardMenu from "./JobCardMenu";
import { action } from "@storybook/addon-actions";

export default {
  title: "JobCard/JobCardMenu",
};

export const visible = () => (
  <JobCardMenu
    id={"1"}
    handleEdit={action("edit")}
    handleDelete={action("delete")}
    visible
  />
);
export const hidden = () => (
  <JobCardMenu
    id={"1"}
    handleEdit={action("edit")}
    handleDelete={action("delete")}
  />
);
