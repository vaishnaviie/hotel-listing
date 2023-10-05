import { ACTION } from "../constant/Constant";

export const Reducer = (state, action) => {
  switch (action.type) {
    case ACTION.CITY:
      return { ...state, city: action.payload };

    case ACTION.NO_OF_ELEMENT:
      return { ...state, noOfElement: action.payload };

    default:
      return state;
  }
};

// export default Reducer;
