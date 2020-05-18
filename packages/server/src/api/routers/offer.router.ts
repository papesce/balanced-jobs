import { IOffer } from "balanced-jobs-model";
import { Request, Response, NextFunction } from "express";
import * as HttpStatus from "http-status-codes";
import express from "express";

const api = express.Router();

api.get(`/new-offer`, async (req: Request, res: Response, next: NextFunction) => {
    try {
        // const exercise: IExercise = await ExerciseService.getExerciseById(exerciseId);
        // save to the DB and return
        const newOffer: IOffer = {
            _id: '8',
            title: 't',
            description: 'd',
            freeText:''

        }
        return res.status(HttpStatus.OK).json(newOffer);
  } catch (err) {
    return next(err);
  }
});

api.get(`/offers`, async (req: Request, res: Response, next: NextFunction) => {
  try {
      // const exercise: IExercise = await ExerciseService.getExerciseById(exerciseId);
      // save to the DB and return
      const offers: IOffer[] = [{
          _id: '8',
          title: 't',
          description: 'd',
          freeText:''

      }];
      return res.status(HttpStatus.OK).json(offers);
} catch (err) {
  return next(err);
}
});

export default api;