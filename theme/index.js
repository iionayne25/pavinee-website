import { createTheme } from "@mui/material/styles";

const theme = createTheme({
 
  palette: {
   colors:{
    green: "#909E68",
        greenLight: "#CDE1A5",
        greenBtn: "#D7ECB0",
        yellow: "#FFF3B5",
        yellowLight: "#FFFEF0",
        orange:"#C9792F",
   }
  },
  cssOutlinedInput: {
    "&:not(hover):not($disabled):not($cssFocused):not($error) $notchedOutline": {
      borderColor: "#909E68" 
    }},
  textField: {
    background: "white",
    border: "2px solid",
    borderRadius: "10px",
    borderColor: "#909E68",
  },
  typography: {
    fontFamily: ["IBM Plex Sans Thai", "sans-serif"].join(","),
  },
  cssOutlinedInput: {
    "&:not(hover):not($disabled):not($cssFocused):not($error) $notchedOutline": {
      borderColor: "#AD8259" 
    }},
  overrides: {
    MuiCssBaseline: {
      "@global": {
        "@font-face": [
          {
            fontFamily: "Merriweather', serif",
            fontDisplay: "swap",
          },
        ],
      },
    },
  },
  breakpoints: {
    values: {
      sm: 320,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1440,
    },
  },
});

export default theme;
