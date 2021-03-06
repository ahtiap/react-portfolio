import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import Container from "@material-ui/core/Menu";
import { useLocation, withRouter } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    [theme.breakpoints.down("xs")]: {
      flexGrow: 1,
    },
  },
  headerOptions: {
    display: "flex",
    flex: 1,
    justifyContent: "space-evenly",
  },
  rightToolbar: {
    marginLeft: "auto",
    marginRight: -12,
  },
}));

const NavBar = (props) => {
  const { history } = props;
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const theme = useTheme();
  const location = useLocation();

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClick = (menuTitle, pageURL) => {
    history.push(pageURL);
    setAnchorEl(null);
  };

  const menuItems = [
    {
      id: "1",
      menuTitle: "About",
      pageURL: "/",
    },
    {
      id: "2",
      menuTitle: "Portfolio",
      pageURL: "/portfolio",
    },
    {
      id: "4",
      menuTitle: "Contact",
      pageURL: "/contact",
    },
  ];

  const headerTitle =
    location.pathname === "/"
      ? "About"
      : location.pathname
          .substring(1, location.pathname.length)
          .charAt(0)
          .toUpperCase() + location.pathname.slice(2);

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            {headerTitle}
          </Typography>
          <>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
              onClick={handleMenu}
              className={classes.rightToolbar}
            >
              <MenuIcon />
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
              open={open}
              onClose={() => setAnchorEl(null)}
            >
              {menuItems.map((menuItem) => {
                const { menuTitle, pageURL, id } = menuItem;
                return (
                  <MenuItem
                    key={id}
                    onClick={() => handleMenuClick(menuTitle, pageURL)}
                  >
                    {menuTitle}
                  </MenuItem>
                );
              })}
            </Menu>
          </>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default withRouter(NavBar);
