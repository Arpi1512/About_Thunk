export function getAllUsers() {
  return function (dispatch) {
    fetch("https://randomuser.me/api?results=15")
      .then((r) => r.json())
      .then((r) => dispatch(setAllUsers(r.results)));
  };
}

export function setAllUsers(data) {
  return {
    type: "SET-ALL-USERS",
    data,
  };
}
