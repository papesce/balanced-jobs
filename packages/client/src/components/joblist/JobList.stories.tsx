import React from "react";
import JobList from "./JobList";
import { offers1, offers2, offers5, offers6 } from "./Job.utils";
import { action } from "@storybook/addon-actions";

export default {
  title: "JobList",
};

export const loading = () => (
  <JobList
    loading
    offers={offers1}
    editOffer={action("edit")}
    deleteOffer={action("delete")}
  />
);
export const empty = () => (
  <JobList
    offers={[]}
    editOffer={action("edit")}
    deleteOffer={action("delete")}
  />
);
export const list1 = () => (
  <JobList
    offers={offers1}
    editOffer={action("edit")}
    deleteOffer={action("delete")}
  />
);
export const list2 = () => (
  <JobList
    offers={offers2}
    editOffer={action("edit")}
    deleteOffer={action("delete")}
  />
);
export const list5 = () => (
  <JobList
    offers={offers5}
    editOffer={action("edit")}
    deleteOffer={action("delete")}
  />
);
export const list6 = () => (
  <JobList
    offers={offers6}
    editOffer={action("edit")}
    deleteOffer={action("delete")}
  />
);
