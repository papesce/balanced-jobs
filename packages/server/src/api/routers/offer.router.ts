import { IOfferResponse } from './../../../../model/dist/api/Offer.api.d';
import OfferService from './../services/offers';
import { IOffer, IDeleteOfferResponse } from "balanced-jobs-model";
import { Request, Response, NextFunction } from "express";
import * as HttpStatus from "http-status-codes";
import express from "express";

const api = express.Router();

api.post(`/new-offer`, async (req: Request, res: Response, next: NextFunction) => {
    try {
        const newOffer: IOffer = await OfferService.getNewOffer();
        return res.status(HttpStatus.OK).json(newOffer);
  } catch (err) {
    return next(err);
  }
});

api.delete('/offer/:offerId', async (req: Request, res: Response, next: NextFunction) => {
  try {
      const { offerId } = req.params;
      const deletedOffer: IOffer = await OfferService.deleteOffer(offerId);
      const offers: IOffer[] = await OfferService.getOffers();
      const response: IDeleteOfferResponse = {
        deletedOffer,
        offers
      }
      return res.status(HttpStatus.OK).json(response);
} catch (err) {
  return next(err);
}
});
api.get('/offer/:offerId', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { offerId } = req.params;
    const offer: IOffer | null  = await OfferService.getOffer(offerId);
    const response: IOfferResponse = {offer};
    return res.status(HttpStatus.OK).json(response);
  } catch (err) {
    return next(err);
  }
});  
api.get(`/offers`, async (req: Request, res: Response, next: NextFunction) => {
  try {
      const offers: IOffer[] = await OfferService.getOffers();      
      return res.status(HttpStatus.OK).json(offers);
} catch (err) {
  return next(err);
}
});

export default api;