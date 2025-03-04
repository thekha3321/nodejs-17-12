import { StatusCodes } from "http-status-codes";
import { boardService } from "~/services/boardService";
import ApiError from "~/utils/ApiError";

const createNew = async (req, res, next) => {
  try {
    const createdNewBoard = await boardService.createNew(req.body);
    res.status(StatusCodes.CREATED).json(createdNewBoard);
  } catch (error) {
    next(error);
  }
};

export const boardController = {
  createNew,
};
