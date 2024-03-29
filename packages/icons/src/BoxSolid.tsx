import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M50.73 58.53A48 48 0 0 1 93.67 32H208v128H0L50.73 58.53zM240 160V32h114.3c18.2 0 34.8 10.27 43 26.53L448 160H240zm208 256c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64V192h448v224z" />
  </svg>
);

const SvgBoxSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgBoxSolid;
