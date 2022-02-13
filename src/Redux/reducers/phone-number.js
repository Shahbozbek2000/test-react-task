const initialState = {
  categories: {},
};
const phoneNumberReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_PHONE_NUMBER":
      return { ...state };
    default:
      return state;
  }
};
export default phoneNumberReducer;
