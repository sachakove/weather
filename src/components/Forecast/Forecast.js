import { Card, CardContent, CardHeader, Grid, Typography } from "@mui/material";
import { WbSunnyOutlined } from "@material-ui/icons";
import { useSelector } from "react-redux";
import useStyles from "./style";
import { forecast as data } from "../../data";
import Sunny from "../../assets/icons/1.svg";

const Forecast = () => {
  const classes = useStyles();
  const forecast = data;
  const { name } = useSelector((state) => state.location);
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  // const d = new Date(dateString);
  // const dayName = days[d.getDay()];

  return (
    <Grid container spacing={0} className={classes.container}>
      <Grid item xs={4}>
        <Card className={classes.itemCard}>
          <CardHeader title="Sunday" className={classes.itemHeader} />
          <CardContent className={classes.content}>
            <Typography variant="subtitle2">{name}</Typography>
            <span className={classes.contentBox}>
              <Typography variant="h2">
                {`${data[0].Temperature.Maximum.Value} ${data[0].Temperature.Maximum.Unit}`}
              </Typography>
              <img src={Sunny} alt="Sunny" className={classes.iconMain} />
            </span>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Forecast;
