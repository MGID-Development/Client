import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    custom: {
      gray: string;
      grayText: string;
    };
  }

  interface PaletteOptions {
    custom: {
      gray: string;
      grayText: string;
    };
  }
}
const theme = createTheme({
  typography: {
    fontFamily: '"Inter", sans-serif',
  },
  palette: {
    primary: {
      main: "#FDB03C",
      contrastText: "#ECECEE",
    },
    secondary: {
      main: "#051829",
      light: "#0E2D43",
    },
    warning: {
      main: "#F25E4B",
    },
    info: {
      main: "#E29B54",
    },
    success: {
      main: "#75DF5B",
    },
    background: {
      default: "#ECECEE",
    },
    custom: {
      gray: "#CBCBCB",
      grayText: "#707070",
    },
  },
  components: {
    MuiLink: {
      styleOverrides: {
        root: {
          color: "inherit",
          textDecoration: "none",
          "&:hover": {
            color: "inherit",
          },
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: '"Inter", sans-serif',
        },
      },
    },
  },
});

export default theme;
