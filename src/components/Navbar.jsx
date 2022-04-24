import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import BalanceIcon from "@mui/icons-material/Balance";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { logOut } from "../auth/firebase";

const Navbar = () => {
  const navigate = useNavigate();
  const { currentUser } = React.useContext(AuthContext);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleHomeClick = () => {
    navigate("/");
  };

  return (
    <Box sx={{ flexGrow: 1, m: 0 }}>
      <AppBar position="static" sx={{ bgcolor: "#eb1111", color: "wheat" }}>
        <Toolbar>
          <IconButton size="large" color="inherit" onClick={handleHomeClick}>
            <BalanceIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, color: "wheat", fontSize: "30px" }}
          >
            AKKOCHES <span sx={{ color: "red", fontSize: "30px" }}> IT </span> Blog
          </Typography>
          <div>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              {" "}
              {currentUser ? (
                <div>
                  {" "}
                  <MenuItem
                    onClick={() => {
                      handleClose();
                      navigate("/profile");
                    }}
                  >
                    Profile
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      handleClose();
                      navigate("/newblog");
                    }}
                  >
                    New Blog
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      logOut();
                      handleClose();
                      navigate("/login");
                    }}
                  >
                    Logout
                  </MenuItem>{" "}
                </div>
              ) : (
                <div>
                  <MenuItem
                    onClick={() => {
                      handleClose();
                      navigate("/login");
                    }}
                  >
                    Login
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      handleClose();
                      navigate("/register");
                    }}
                  >
                    Register
                  </MenuItem>
                </div>
              )}
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
