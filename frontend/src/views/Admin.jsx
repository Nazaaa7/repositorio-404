import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { userType } from "../context/userTypes";

const Admin = () => {
  const { state, stateDispatch } = useContext(UserContext);

  const logOut = () => {
    stateDispatch({
      type: userType.logOut,
    });
  };
  return (
    <div className="container">
      <div
        className="d-flex justify-content-center align-items-center "
        style={{ height: "100vh", flexDirection: "column" }}
      >
   

        <button className="btn btn-primary" onClick={() => logOut()}>
          Cerrar sesión
        </button>
      </div>
    </div>
  );
};

export default Admin;
