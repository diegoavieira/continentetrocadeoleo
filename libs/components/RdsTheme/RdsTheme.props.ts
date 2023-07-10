import { ThemeOptions } from '@material-ui/core';

export default interface RdsThemeProps {
  /**
   * Children.
   */
  children: JSX.Element | JSX.Element[];
  /**
   * Theme.
   */
  theme?: ThemeOptions;
  /**
   * Prefix to build production.
   */
  productionPrefix?: string;
  /**
   * Prefix to css.
   */
  seed?: string;
}
