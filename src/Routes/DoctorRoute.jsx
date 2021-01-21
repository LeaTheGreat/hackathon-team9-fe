import { Redirect, Route } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const DoctorRoute = ({ component: Component, ...rest }) => {
  const { auth } = useAuth();
  return (
    <Route
      {...rest}
      render={(props) => {
        return auth.role === "Doctor" ? (
          <Component {...props} />
        ) : (
          <Redirect to="/home" />
        );
      }}
    ></Route>
  );
};

export default DoctorRoute;