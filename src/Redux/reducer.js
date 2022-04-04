import UserState from "./state";

function Reducer(state = UserState, { type, ...payload }) {
  let temp = { ...state };
  switch (type) {
    case "SET-ALL-USERS":
      temp.items = payload.data;

      break;
  }
  return temp;
}

export default Reducer;
