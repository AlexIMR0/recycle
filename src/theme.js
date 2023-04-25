import { createContext, useState,useMemo } from "react";
import { createTheme} from "@mui/material/styles";

// Color design tokens , returns set of color tokens based on mode selected
// The first mode is dark, and the stylings are adjusted to match, the second is light
export const tokens = (mode) => ({

    ...(mode === 'dark'
    ?{
        primary: {
            100: "#d3d3d3",
            200: "#a7a7a7",
            300: "#7a7a7a",
            400: "#4e4e4e",
            500: "#222222",
            600: "#1b1b1b",
            700: "#141414",
            800: "#0e0e0e",
            900: "#070707"
        },
        indigo: {
            100: "#d0dbe4",
            200: "#a2b6c9",
            300: "#7392af",
            400: "#456d94",
            500: "#164979",
            600: "#123a61",
            700: "#0d2c49",
            800: "#091d30",
            900: "#040f18"
        },
        gray: {
            100: "#d6dddf",
            200: "#adbbbe",
            300: "#849a9e",
            400: "#5b787d",
            500: "#32565d",
            600: "#28454a",
            700: "#1e3438",
            800: "#142225",
            900: "#0a1113"
        },
        whiteaccent: {
            100: "#ffffff",
            200: "#ffffff",
            300: "#ffffff",
            400: "#ffffff",
            500: "#ffffff",
            600: "#cccccc",
            700: "#999999",
            800: "#666666",
            900: "#333333"
        },
        blueaccent: {
            100: "#e0ecee",
            200: "#c1d9dd",
            300: "#a1c5cd",
            400: "#82b2bc",
            500: "#639fab",
            600: "#4f7f89",
            700: "#3b5f67",
            800: "#284044",
            900: "#142022"
        },
        
        
    }:{
        
            primary: {
                100: "#070707",
                200: "#0e0e0e",
                300: "#141414",
                400: "#1b1b1b",
                500: "#222222",
                600: "#4e4e4e",
                700: "#7a7a7a",
                800: "#a7a7a7",
                900: "#d3d3d3",
            },
            indigo: {
                100: "#040f18",
                200: "#091d30",
                300: "#0d2c49",
                400: "#123a61",
                500: "#164979",
                600: "#456d94",
                700: "#7392af",
                800: "#a2b6c9",
                900: "#d0dbe4",
            },
            gray: {
                100: "#0a1113",
                200: "#142225",
                300: "#1e3438",
                400: "#28454a",
                500: "#32565d",
                600: "#5b787d",
                700: "#849a9e",
                800: "#adbbbe",
                900: "#d6dddf",
            },
            whiteaccent: {
                100: "#333333",
                200: "#666666",
                300: "#999999",
                400: "#cccccc",
                500: "#ffffff",
                600: "#ffffff",
                700: "#ffffff",
                800: "#ffffff",
                900: "#ffffff",
            },
            blueaccent: {
                100: "#142022",
                200: "#284044",
                300: "#3b5f67",
                400: "#4f7f89",
                500: "#639fab",
                600: "#82b2bc",
                700: "#a1c5cd",
                800: "#c1d9dd",
                900: "#e0ecee",
            
            
        },
    }), 
});

// MUI theme settings, returns theme object based on design token passed in

export const themeSettings = (mode)=> {
    const colors = tokens(mode);

    return {
        palette:{
            mode: mode,
            ...(mode === 'dark'
            ?{
                primary:
                {
                    main: colors.primary[500],
                },
                secondary:{
                    main: colors.indigo[500],
                },
                neutral:{
                    dark: colors.gray[700],
                    main: colors.gray[500],
                    light: colors.gray[100],

                },
                background : {
                    default: colors.primary[500],
                }

            } : {
                primary:
                {
                    main: colors.primary[100],
                },
                secondary:{
                    main: colors.indigo[500],
                },
                neutral:{
                    dark: colors.gray[700],
                    main: colors.gray[500],
                    light: colors.gray[100],

                },
                background : {
                    default: "#EBEBEB",
                }

            }),
        },
        typography: {
            fontFamily: ["Source Sans Pro","Sans Serif"].join(","),
            fontSize: 12,
            h1:{
                fontFamily: ["Source Sans Pro","Sans Serif"].join(","),
                fontSize: 40,
            },
            h1:{
                fontFamily: ["Source Sans Pro","Sans Serif"].join(","),
                fontSize: 40,
            },
            h2:{
                fontFamily: ["Source Sans Pro","Sans Serif"].join(","),
                fontSize: 32,
            },
            h3:{
                fontFamily: ["Source Sans Pro","Sans Serif"].join(","),
                fontSize: 24,
            },
            h4:{
                fontFamily: ["Source Sans Pro","Sans Serif"].join(","),
                fontSize: 20,
            },
            h5:{
                fontFamily: ["Source Sans Pro","Sans Serif"].join(","),
                fontSize: 16,
            },
            h6:{
                fontFamily: ["Source Sans Pro","Sans Serif"].join(","),
                fontSize: 14,
            },
            
        },
    };
};

// context for color mode, context object holds function toggleColorMode
export const ColorModeContext = createContext({
    toggleColorMode: () => {},
  });
  
  // Hook returns an array containing theme and colorMode values, function creates correct theme based on mode selected.
  export const useMode = () => {
    const [mode, setMode] = useState("dark");
  
    const colorMode = useMemo(
      () => ({
        toggleColorMode: () =>
          setMode((prev) => (prev === "light" ? "dark" : "light")),
      }),
      []
    );
  
    const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
    return [theme, colorMode];
    }
