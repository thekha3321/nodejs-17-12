import { StatusCodes } from "http-status-codes";
import ApiError from "~/utils/ApiError";

const createNew = async (req, res, next) => {
  try {
    throw new ApiError(200, "lỗi");
  } catch (error) {
    next(error);
  }
};

export const boardController = {
  createNew,
};
