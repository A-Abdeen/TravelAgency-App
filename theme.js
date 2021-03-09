import { DefaultTheme } from "@react-navigation/native";

export const NavTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "rgba(0, 0, 0, 1)",
    background: "rgba(204, 204, 204, 1)",
  },
};
