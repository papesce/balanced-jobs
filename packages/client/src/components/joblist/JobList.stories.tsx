import React from "react";
import JobList from "./JobList";
import { offers1 } from "./Job.utils";
import { action } from "@storybook/addon-actions";

export default {
  title: "JobList",
};

export const initial = () => (
  <JobList
    offers={offers1}
    editOffer={action("edit")}
    deleteOffer={action("delete")}
  />
);
