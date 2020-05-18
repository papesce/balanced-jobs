import React from "react";
import Home from "./Home";
import { offers1 } from "../joblist/Job.utils";

export default {
  title: "Home"
};


export const home = () => (
  <Home offers={offers1}/>
);
