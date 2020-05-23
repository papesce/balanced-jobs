import { IOfferDao, IOffer } from "../metamodel/Offer.metamodel";

export const getOfferFromDao =  (offerDao: IOfferDao): IOffer => {
    const offer: IOffer = {
      _id: offerDao._id,
      title: offerDao.title,
      description: offerDao.description,
      freeText: offerDao.freeText,
    };
    return offer;
};

export const getOffersFromDao =  (offersDao: IOfferDao[]): IOffer[] => {
  return offersDao.map((offerDao) => getOfferFromDao(offerDao));
};
