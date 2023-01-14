import { ColorActionType, ColorState } from "./types";

const initialState = (): ColorState => ({
  color: "blue",
});
const reducer = (state = initialState(), action: ColorActionType): ColorState => {
  switch (action.type) {
    case "red":
      return { ...state, color: "red" };
    case "blue":
      return { ...state, color: "blue" };
    case "green":
      return { ...state, color: "green" };
    default:
      return state;
  }
};

export default reducer;
