import React from "react";
import NewJobButton from "./NewJobButton";
import { action } from "@storybook/addon-actions";

export default {
  title: "Home/HomeC/NewJobButton"
};

export const initial = () => (
  <NewJobButton creating={false} handleButtonClick={action('click')}/>
);
export const creating = () => (
  <NewJobButton creating={true} handleButtonClick={action('click')}/>
);