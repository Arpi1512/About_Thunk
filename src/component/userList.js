import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "../Redux/action";

export function UserList() {
  const users = useSelector((store) => store.items);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllUsers());
  }, []);

  return (
    <div>
      <h3>User List {users.length}</h3>
    </div>
  );
}
