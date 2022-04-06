import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M256 17.68C256 8.059 263.4 0 273.1 0 405 0 512 106.1 512 238.9c0 9.7-8.1 17.1-17.7 17.1H272c-8.8 0-16-7.2-16-16V17.68zM288 224h191.5C472.2 121.6 390.4 39.83 288 32.53V224zm-64 64h221.3c18.5 0 33.3 15.7 29.5 33.8C451.9 430.5 355.5 512 240 512 107.5 512 0 404.5 0 272 0 156.5 81.53 60.12 190.2 37.18 208.3 33.36 224 48.2 224 66.7V288zM192 69.56C100.3 91.22 32 173.7 32 272c0 114.9 93.1 208 208 208 98.3 0 180.8-68.3 202.4-160H224c-17.7 0-32-14.3-32-32V69.56z" />
  </svg>
);

const SvgChartPieSimple = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgChartPieSimple;
