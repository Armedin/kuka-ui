import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M512 0c35.3 0 64 28.65 64 64v288c0 35.3-28.7 64-64 64H160c-35.3 0-64-28.7-64-64V64c0-35.35 28.7-64 64-64h352zm0 32H256v64h288V64c0-17.67-14.3-32-32-32zM128 64v32h96V32h-64c-17.7 0-32 14.33-32 32zm32 320h352c17.7 0 32-14.3 32-32V128H128v224c0 17.7 14.3 32 32 32zm-128 0c0 53 42.98 96 96 96h336c8.8 0 16 7.2 16 16s-7.2 16-16 16H128C57.31 512 0 454.7 0 384V112c0-8.8 7.164-16 16-16 8.84 0 16 7.2 16 16v272z" />
  </svg>
);

const SvgBrowsers = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgBrowsers;
