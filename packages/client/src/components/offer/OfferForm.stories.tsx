import React from "react";
import OfferForm from "./OfferForm";
import { offer1 } from "../joblist/Job.utils";
import { action } from "@storybook/addon-actions";

export default {
  title: "Offer/OfferForm"
};

export const singleOffer = () => (
  <OfferForm offer={offer1} handleChangeDebounced={action(`changed`)} />
);