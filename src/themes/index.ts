import { DefaultTheme } from "styled-components";

import dark from "./dark";
import white from "./dark";

interface Themes {
  [key: string]: DefaultTheme;
}

const themes: Themes = {
  dark,
  white,
};

export default themes;
