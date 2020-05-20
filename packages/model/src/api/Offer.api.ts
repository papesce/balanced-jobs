import { IOffer } from "../metamodel/Offer.metamodel";

export interface IDeleteOfferResponse {
  deletedOffer: IOffer;
  offers: IOffer[];
}