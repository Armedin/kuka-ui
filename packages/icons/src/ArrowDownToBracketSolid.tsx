import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M448 416v-64c0-17.67-14.33-32-32-32s-32 14.33-32 32v64c0 17.67-14.33 32-32 32H96c-17.67 0-32-14.33-32-32v-64c0-17.67-14.33-32-32-32S0 334.33 0 352v64c0 53.02 42.98 96 96 96h256c53 0 96-43 96-96zm-201.4-73.4 128-128c12.51-12.51 12.49-32.76 0-45.25-12.5-12.5-32.75-12.5-45.25 0L256 242.8V32c0-17.69-14.31-32-32-32s-32 14.31-32 32v210.8l-73.4-73.4c-12.5-12.5-32.75-12.5-45.25 0s-12.5 32.75 0 45.25l128 128c12.55 12.45 32.75 12.45 45.25-.05z" />
  </svg>
);

const SvgArrowDownToBracketSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgArrowDownToBracketSolid;
