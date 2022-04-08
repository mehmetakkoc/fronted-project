import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import NewBlog from "../pages/NewBlog";
import Profile from "../pages/Profile";
import SignUpForm from "../pages/Login";
import PrivateRouter from "./PrivateRouter";

const AppRouter = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<PrivateRouter />}>
          <Route path="" element={<SignUpForm />} />
        </Route>

        <Route path="/newblog" element={<PrivateRouter />}>
          <Route path="" element={<NewBlog />} />
        </Route>

        <Route path="/profile" element={<PrivateRouter />}>
          <Route path="" element={<Profile />} />
        </Route>
        <Route path="/logout" element={<PrivateRouter />}>
          <Route path="" element={<SignUpForm />} />
        </Route>

        
      </Routes>
    </Router>
  );
};

export default AppRouter;
