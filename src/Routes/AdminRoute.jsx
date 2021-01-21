import { Redirect, Route } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const AdminRoute = ({ component: Component, ...rest }) => {
  const { auth } = useAuth();
  return (
    <Route
      {...rest}
      render={(props) => {
        return auth.role === "Admin" ? (
          <Component {...props} />
        ) : (
          <Redirect to="/home" />
        );
      }}
    ></Route>
  );
};

export default AdminRoute;