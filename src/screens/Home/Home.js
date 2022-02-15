import { Grid, Box } from "@mui/material";
import React from "react";
import Forecast from "../../components/Forecast/Forecast";
import Search from "../../components/Search/Search";
import useStyles from "./style";

const Home = () => {
  const classes = useStyles();
  return (
    <Box className={classes.wrapper}>
      <Grid
        container
        direction="column"
        justifyContent="space-between"
        alignItems="center"
        className={classes.container}
      >
        <Grid item xs={4} className={classes.item}>
          <Search />
        </Grid>
        <Grid item xs={8} className={classes.item}>
          <Forecast />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
