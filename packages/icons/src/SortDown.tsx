import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" {...props}>
    <path d="M287.1 288H31.2c-28.36 0-42.73 34.5-22.62 54.63l127.1 128c12.5 12.5 32.86 12.5 45.36 0l127.1-128C330.7 322.5 316.3 288 287.1 288zm-128 160L32.05 320h255.9L159.1 448z" />
  </svg>
);

const SvgSortDown = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgSortDown;
