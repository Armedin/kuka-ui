import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M488 352H48c-26.5 0-48 21.5-48 48v64c0 26.5 21.5 48 48 48h440c13.25 0 24-10.75 24-24V376c0-13.2-10.7-24-24-24zM192 480H48c-8.75 0-16-7.2-16-16v-64c0-8.7 7.25-16 16-16h144v96zm288 0H224v-96h256v96zm80-128c-8.801 0-16 7.199-16 16v128c0 8.799 7.199 16 16 16s16-7.201 16-16V368c0-8.8-7.2-16-16-16zm64 0c-8.801 0-16 7.199-16 16v128c0 8.799 7.199 16 16 16s16-7.201 16-16V368c0-8.8-7.2-16-16-16zM473.6 131.2C437.5 104.2 416 61.06 416 16c0-8.844-7.2-16-16-16s-16 7.156-16 16c0 55.09 26.31 107.7 70.39 140.8C490.5 183.8 512 226.9 512 272c0 8.8 7.2 16 16 16s16-7.2 16-16c0-55.1-26.3-107.7-70.4-140.8zm76.8 25.6c36.1 27 57.6 70.1 57.6 115.2 0 8.8 7.2 16 16 16s16-7.2 16-16c0-55.09-26.31-107.7-70.39-140.8C533.5 104.2 512 61.06 512 16c0-8.844-7.2-16-16-16s-16 7.156-16 16c0 55.09 26.3 107.7 70.4 140.8z" />
  </svg>
);

const SvgSmoking = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgSmoking;