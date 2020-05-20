import React from "react";
import Home from "./Home";
import { offers1 } from "../joblist/Job.utils";
import { action } from "@storybook/addon-actions";

export default {
  title: "Home"
};


export const home = () => (
  <Home offers={offers1} editOffer={action('edit')} deleteOffer={action('delete')}/>
);
