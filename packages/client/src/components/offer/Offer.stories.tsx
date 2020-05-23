import React from "react";
import Offer from "./Offer";
import { offer1 } from "../joblist/Job.utils";
import { action } from "@storybook/addon-actions";

export default {
  title: "Offer/Offer"
};

export const loading = () => (
  <Offer loading offer={offer1} handleChangeDebounced={action(`changed`)} />
);
export const nullOffer = () => (
  <Offer  offer={null} handleChangeDebounced={action(`changed`)} />
);
export const singleOffer = () => (
  <Offer  offer={offer1} handleChangeDebounced={action(`changed`)} />
);