import React from "react";
import { action } from "@storybook/addon-actions";
import ErrorMessage from "./ErrorMessage";

export default {
  title: "ErrorMessage",
};

export const open = () => (
  <ErrorMessage open={true} message={"text"} handleClose={action("close")} />
);
export const closed = () => (
  <ErrorMessage open={false} message={"text"} handleClose={action("close")} />
);
