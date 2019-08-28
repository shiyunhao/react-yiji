import { CHANGE_ISLIKE, ADD_COMMENT } from "./actionsTypes";

const changeIsLike = id => {
  return {
    type: CHANGE_ISLIKE,
    id
  };
};
const addComment = (payload, callback) => {
  return {
    type: ADD_COMMENT,
    payload,
    callback
  };
};
export { changeIsLike, addComment };
