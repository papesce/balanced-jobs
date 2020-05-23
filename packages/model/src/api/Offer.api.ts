import { IOffer } from "../metamodel/Offer.metamodel";

export interface IDeleteOfferResponse {
  deletedOffer: IOffer;
  offers: IOffer[];
}

export interface IOfferResponse {
  offer: IOffer;
}

export interface IOfferUpdate {
  title: string,
  description: string,
  freeText: string
}

export interface IOfferUpdateRequest {
  offerUpdate: IOfferUpdate
}