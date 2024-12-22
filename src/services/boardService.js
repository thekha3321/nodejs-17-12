import { slugify } from "~/utils/formater";

const createNew = async (reqBody) => {
  try {
    const newBoard = {
      ...reqBody,
      slug: slugify(reqBody.title),
    };
    return newBoard;
  } catch (error) {
    next(error);
  }
};

export const boardService = {
  createNew,
};
