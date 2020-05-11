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
            name:'',
            freeText:''

        }
        return res.status(HttpStatus.OK).json(newOffer);
  } catch (err) {
    return next(err);
  }
});

export default api;