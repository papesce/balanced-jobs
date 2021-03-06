import { OfferDocumentModel } from '../mongoose/offer.mongoose';
import logger from "../../common/logger";
import { IOfferDao, IOffer, getOfferFromDao, getOffersFromDao, IOfferUpdate } from "balanced-jobs-model";

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
  getOffer = async (offerId: string): Promise<IOffer | null> => {
    const offerDao: IOfferDao | null = await OfferDocumentModel.findOne({ _id: offerId }).lean().exec();
    return offerDao ? getOfferFromDao(offerDao) : null;
  }
  updateOffer = async (offerId: string,  offerUpdate: IOfferUpdate) : Promise<IOffer | null> => {
    const offerDao: IOfferDao = await OfferDocumentModel.findOneAndUpdate(
      { _id: offerId },
      offerUpdate,
      { new: true }
    )
      .lean()
      .exec();
      return offerDao ? getOfferFromDao(offerDao) : null;
  }
}


export default new OfferService();
