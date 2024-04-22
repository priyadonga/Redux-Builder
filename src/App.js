import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { GET_USER_PENDING } from "./redux-saga/user/action/action";
// admin--------------------------
import Data from "./admin/Data";
import AdminNavbar from "./admin/AdminNavbar";
// user---------------------------
import UserNavbar from "./user/UserNavbar";
import From from "./user/From";

  function App() {
    let dispatch = useDispatch();

    useEffect(() => {
      dispatch({ type: GET_USER_PENDING });
    }, []);
    let role = "admin";
  
    if (role === "admin") {
      return (
        <>
          <AdminNavbar />
            <Data/>
        </>
      );
    } else if (role === "user") {
      return (
        <>
          <UserNavbar />
          <From/>
        </>
      );
    } else {
      return <h1>Not found</h1>;
    }
  }

export default App;