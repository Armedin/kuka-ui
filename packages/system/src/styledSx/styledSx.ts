import deepmerge from 'deepmerge';
import callIfFn from '../callIfFn';
import * as CSS from 'csstype';

import { OverwriteCSSProperties } from './OverwriteCSSProperties';

export type ResponsiveStyleValue<T> =
  | T
  | Array<T | null>
  | { [key: string]: T | null };

export type CSSPseudoSelectorProps<Theme extends object = {}> = {
  [K in CSS.Pseudos]?: SystemStyleObject<Theme>;
};

export interface CSSSelectorObject<Theme extends object = {}> {
  [cssSelector: string]: SystemStyleObject<Theme>;
}

export interface AllSystemCSSProperties
  extends Omit<
      CSS.PropertiesFallback<number | string>,
      keyof OverwriteCSSProperties
    >,
    OverwriteCSSProperties {}

export type SystemCssProperties<Theme extends object = {}> = {
  [K in keyof AllSystemCSSProperties]:
    | ResponsiveStyleValue<AllSystemCSSProperties[K]>
    | ((theme: Theme) => ResponsiveStyleValue<AllSystemCSSProperties[K]>)
    | SystemStyleObject<Theme>;
};

export type SystemStyleObject<Theme extends object = {}> =
  | SystemCssProperties<Theme>
  | CSSPseudoSelectorProps<Theme>
  | CSSSelectorObject<Theme>
  | null;

export type SxProps<Theme extends object = {}> = SystemStyleObject<Theme>;

const styledSx = (props: any) => {
  const { sx: styles, theme = {} } = props || {};

  if (!styles) {
    return null;
  }

  if (typeof styles === 'function') {
    return styles();
  }

  if (typeof styles !== 'object') {
    return styles;
  }

  let css = {};

  Object.keys(styles).forEach(styleKey => {
    const value = callIfFn(styles[styleKey]);

    css = deepmerge(css, { [styleKey]: value });
  });

  return css;
};

export default styledSx;
