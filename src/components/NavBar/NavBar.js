import React, { useState } from "react";
import { Tab, Tabs, AppBar } from "@material-ui/core";
import { Link, useLocation } from "react-router-dom";
import { FilterDrama } from "@material-ui/icons";
import { Toolbar } from "@mui/material";
import useStyles from "./style";
// FilterDrama, FilterDramaOutlined, FilterDramaRounded, FilterDramaSharp, FilterDramaTwoTone

const NavBar = () => {
  const location = useLocation();
  const routes = [
    { name: "home", link: "/" },
    { name: "favorites", link: "/favorites" },
  ];
  const [value, setValue] = useState(() => location.pathname);
  const classes = useStyles();

  const handleChange = (e, value) => {
    setValue(() => value);
  };

  return (
    <>
      <AppBar
        position="fixed"
        color="transparent"
        style={{
          top: 0,
        }}
      >
        <Toolbar>
          <FilterDrama color="primary" className={classes.logo} />

          <Tabs
            aria-label="Navigation"
            indicatorColor="primary"
            textColor="primary"
            value={value}
            onChange={handleChange}
            className={classes.tabs}
          >
            {routes.map((route) => (
              <Tab
                key={route.name}
                label={route.name}
                value={route.link}
                component={Link}
                to={route.link}
              />
            ))}
            {/* <Tab label="Home" value={routes[0]} component={Link} to="/" />
            <Tab
              label="Favorites"
              value={routes[1]}
              component={Link}
              to="/favorites"
            /> */}
          </Tabs>
        </Toolbar>
      </AppBar>
      <div className={classes.toolbarMargin} />
    </>
  );
};

export default NavBar;
