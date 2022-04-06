import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M272 32c8.8 0 16 7.16 16 16v16h176c26.5 0 48 21.49 48 48v64c0 26.5-21.5 48-48 48H288v16c0 8.8-7.2 16-16 16s-16-7.2-16-16v-16H48c-26.51 0-48-21.5-48-48v-64c0-26.51 21.49-48 48-48h208V48c0-8.84 7.2-16 16-16zM160 192h96V96h-96v96zm128-96v96h176c8.8 0 16-7.2 16-16v-64c0-8.8-7.2-16-16-16H288zm-160 0H48c-8.84 0-16 7.2-16 16v64c0 8.8 7.16 16 16 16h80V96zm240 160c8.8 0 16 7.2 16 16v16h80c26.5 0 48 21.5 48 48v64c0 26.5-21.5 48-48 48h-80v16c0 8.8-7.2 16-16 16s-16-7.2-16-16v-16H48c-26.51 0-48-21.5-48-48v-64c0-26.5 21.49-48 48-48h304v-16c0-8.8 7.2-16 16-16zm-16 160v-96H224v96h128zm32-96v96h80c8.8 0 16-7.2 16-16v-64c0-8.8-7.2-16-16-16h-80zm-192 0H48c-8.84 0-16 7.2-16 16v64c0 8.8 7.16 16 16 16h144v-96z" />
  </svg>
);

const SvgChartBullet = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgChartBullet;
