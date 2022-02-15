import React from "react";
import {
  createTheme,
  ThemeProvider as Provider,
} from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { responsiveFontSizes } from "@mui/material";

const ThemeProvider = ({ children }) => {
  const overrides = {
    MuiTab: {
      root: {
        backgroundColor: "#303030",
      },
    },
  };

  let theme = React.useMemo(
    () =>
      createTheme({
        overrides,
        palette: {
          type: "dark",
          primary: {
            main: "#84ffff",
          },
          error: {
            main: "#f06292",
          },
        },
      }),
    [overrides]
  );

  theme = responsiveFontSizes(theme);

  return (
    <Provider theme={theme}>
      <CssBaseline />
      {children}
    </Provider>
  );
};

export default ThemeProvider;
