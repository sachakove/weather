// import { makeStyles } from "@mui/styles";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    // backgroundColor: "yellow",
    height: "60%",
  },

  itemCard: {
    // backgroundColor: "black",
    backgroundColor: `${theme.palette.background.default} !important`,
    color: "white !important",
    borderRadius: "0rem !important",
    height: "100%",
  },

  itemHeader: {
    height: "10%",
    fontSize: "5px",
  },
  content: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    // justifyContent: "space-evenly",
  },
  contentBox: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: theme.spacing(3),
    // backgroundColor: "green",
  },
  iconMain: {
    height: "7rem",
    // backgroundColor: theme.palette.primary.main,
  },
}));

export default useStyles;
