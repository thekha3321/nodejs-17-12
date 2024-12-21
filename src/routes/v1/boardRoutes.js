import express from "express";
import { StatusCodes } from "http-status-codes";
import { boardValidation } from "~/validations/boardValidation";

const Router = express.Router();

Router.route("/")
  .get((req, res) => {
    res.status(StatusCodes.OK).json({ message: "api get board" });
  })
  .post((req, res) => {
    boardValidation.createNew(req, res);
  });

export const boardRoute = Router;
