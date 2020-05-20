import { OfferDocumentModel } from '../mongoose/offer.mongoose';
import logger from "../../common/logger";
import { IOfferDao, IOffer, getOfferFromDao, getOffersFromDao } from "balanced-jobs-model";

export class OfferService {
  getOffers = async (): Promise<IOffer[]> =>  {
    logger.info("fetch all offers");
    const offersDao: IOfferDao[] = await OfferDocumentModel.find()
      .lean()
      .exec();
    return getOffersFromDao(offersDao);
  }
  getNewOffer = async (): Promise<IOffer> => {
    logger.info("new offer");
    const offerDao: IOfferDao = await new OfferDocumentModel(
      { title: '' , description:'', freeText: ''}
    ).save();
      return getOfferFromDao(offerDao);
  }
  deleteOffer = async (offerId: string): Promise<IOffer> => {
    logger.info(`deleting offer id ${offerId}`);
      const offerDao: IOfferDao = await OfferDocumentModel.findOneAndRemove({
        _id: offerId
      })
        .lean()
        .exec();
      const offer: IOffer = getOfferFromDao(offerDao);
      return offer;
  }
}

export default new OfferService();
