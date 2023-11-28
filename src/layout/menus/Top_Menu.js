import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { BiAlignLeft, BiShoppingBag } from "react-icons/bi";
import { IoCartSharp } from "react-icons/io5";
import { VscOrganization } from "react-icons/vsc";
import { useState } from "react";
import { CgProfile } from "react-icons/cg";

function Navbar() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="sticky">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 400,
              letterSpacing: "",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            QuirkCart
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <BiAlignLeft />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
                <MenuItem>
                <Typography textAlign="center">Ask Bot</Typography>
              </MenuItem>
              <MenuItem>
                <Typography textAlign="center">Everything</Typography>
              </MenuItem>
              <MenuItem>
                <Typography textAlign="center">Mens</Typography>
              </MenuItem>
              <MenuItem>
                <Typography textAlign="center">Womens</Typography>
              </MenuItem>
              <MenuItem>
                <Typography textAlign="center">Kids</Typography>
              </MenuItem>
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 300,
              letterSpacing: ".2rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            QuirkCart
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <MenuItem>
              <Typography textAlign="center">Everything</Typography>
            </MenuItem>
            <MenuItem>
              <Typography textAlign="center">Mens</Typography>
            </MenuItem>
            <MenuItem>
              <Typography textAlign="center">Womens</Typography>
            </MenuItem>
            <MenuItem>
              <Typography textAlign="center">Kids</Typography>
            </MenuItem>
            <MenuItem>
              <Typography textAlign="center">Accessories</Typography>
            </MenuItem>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Cart">
              <MenuItem>
                <IoCartSharp />
              </MenuItem>
            </Tooltip>
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="User Profile">
              <MenuItem>
                <CgProfile />
              </MenuItem>
            </Tooltip>
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Organization">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 1 }}>
                <VscOrganization style={{ color: "#fff" }} />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem>
                <Typography textAlign="center">Blog</Typography>
              </MenuItem>
              <MenuItem>
                <Typography textAlign="center">About Us</Typography>
              </MenuItem>
              <MenuItem>
                <Typography textAlign="center">Contact</Typography>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
