import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
  },
  logo: {
    marginRight: "5rem",
  },
  tabs: {
    marginLeft: "auto",
  },
}));

export default useStyles;
