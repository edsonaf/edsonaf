import { PORTFOLIO_SCREENS } from "../PortfolioPages";

export const GET_SCREEN_INDEX = (screen_name) => {
  if (!screen_name) return -1;

  for (let i = 0; i < PORTFOLIO_SCREENS.length; i++) {
    if (PORTFOLIO_SCREENS[i].screen_name === screen_name) return i;
  }

  return -1;
};

export const ConvertToPascalCase = (s) => {
  s = s.replace(/(\w)(\w*)/g, function (g0, g1, g2) {
    return g1.toUpperCase() + g2.toLowerCase();
  });
  return s;
};

export const RemoveSpaces = (s) => {
  return s.replace(" ", "");
};