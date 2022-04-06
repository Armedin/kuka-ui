declare const styledSx: (props: any) => any;
export default styledSx;

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
