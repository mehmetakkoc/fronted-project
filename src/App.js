import "./App.css";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import NewBlog from "./pages/NewBlog";
import Profile from "./pages/Profile";
import Register from "./pages/Register";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Login />
      <NewBlog />
      <Profile />
      <Register />
    </div>
  );
}

export default App;
