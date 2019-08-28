export default (state = { isSwiper: true }, action) => {
  switch (action.type) {
    case "LOGIN":
      const { payload } = action;
      if (payload.text === "123456" || payload.val === "asdfqwer") {
        return { ...state, isSwiper: false };
      } else {
        return alert("重新尝试");
      }
    default:
      return state;
  }
};
