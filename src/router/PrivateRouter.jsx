

import { Navigate, Outlet } from "react-router-dom";
import {  useGlobalContext } from "../context/AuthContext";

const PrivateRouter = () => {
  const {currentUser} = useGlobalContext();
  return currentUser ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRouter;
