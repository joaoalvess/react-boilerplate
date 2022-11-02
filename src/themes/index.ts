import {DefaultTheme} from 'styled-components';

import dark from './dark';
import white from './white';

type Themes = Record<string, DefaultTheme>;

const themes: Themes = {
  dark,
  white,
};

export default themes;
