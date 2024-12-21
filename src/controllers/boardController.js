import { StatusCodes } from "http-status-codes";

const createNew = async (req, res, next) => {
  try {
    console.log("controller", req.body);
    res
      .status(StatusCodes.CREATED)
      .json({ message: "api post from controller" });
  } catch (error) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ errors: error.message });
  }
};

export const boardController = {
  createNew,
};
