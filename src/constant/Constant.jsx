import { hotelData } from "../data/Data";

export const initialState = {
  data: hotelData,
  city: "New York",
  noOfElement: 6,
};

export const ACTION = {
  CITY: "city",
  NO_OF_ELEMENT: "noOfElement",
};

// export default initialState;
