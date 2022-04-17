import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import NewBlog from "../pages/NewBlog";
import Profile from "../pages/Profile";
import Login from "../pages/Login";
// import PrivateRouter from "./PrivateRouter";
import Register from "../pages/Register";
import { useGlobalContext } from "../context/Context";
import Home from "../pages/Home";

// import LoginForm from "../components/LoginForm";

// const AppRouter = () => {
//   return (
//     <BrowserRouter>
//       <Navbar />
//       <Routes>
//         <Route path="/register" element={<Register />} />

//         {/* <Route path="/" element={<PrivateRouter />}>
//           <Route path="" element={<Login />} />
//         </Route> */}

//         <Route path="/newblog" element={<PrivateRouter />}>
//           <Route path="" element={<NewBlog />} />
//         </Route>

//         <Route path="/profile" element={<PrivateRouter />}>
//           <Route path="" element={<Profile />} />
//         </Route>
//         <Route path="/logout" element={<PrivateRouter />}>
//           <Route path="" element={<Login />} />
//         </Route>
//         {/* <Route path="/login" element={<Login />} /> */}
//       </Routes>
//     </BrowserRouter>
//   );
// };

// export default AppRouter;

const AppRouter = () => {
  const { currentUser } = useGlobalContext();
  console.log(currentUser);
  return (
    <Router>
      <Navbar />
      <Home />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/profile" element={<Profile />} />
        <Route path="/newblog" element={<NewBlog />} />
        <Route path="/login" element={<Login />} />
      </Routes>

      {/* {currentUser ? (
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/profile" element={<Profile />} />
          <Route path="/newblog" element={<NewBlog />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      )} */}
    </Router>
  );
};
export default AppRouter;
