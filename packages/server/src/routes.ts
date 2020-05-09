import { Application } from "express";
import offerRouter from "./api/routers/offer.router";

const API_VERSION = '/api/v1';

export default function routes(app: Application): void {
   app.use(`${API_VERSION}`, offerRouter);
//   app.use(`${API_VERSION}`, routineRouter);
//   app.use(`${API_VERSION}`, muscleGroupRouter);
//   app.use(`${API_VERSION}`, targetRouter);
//   app.use(`${API_VERSION}`, exerciseRouter);
//   app.use(`${API_VERSION}`, serieRouter);
}