import mongoose from "mongoose";
import { IOfferDao } from "balanced-jobs-model";

const Schema = mongoose.Schema;

export interface IOfferDocument extends mongoose.Document, IOfferDao {}

const schema = new Schema(
  {
    title: { type: String },
    description: { type: String},
    freeText: { type: String }
  },
  {
    timestamps: true,
    usePushEach: true
  }
);

export const OfferDocumentModel = mongoose.model<IOfferDocument>(
  "offer",
  schema
);
