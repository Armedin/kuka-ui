import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M576 176c0 97.2-128.9 176-288 176-13.2 0-26.3-.5-39.9-1.6 5.5 12.8 7.9 26.5 7.9 40.6 0 66.8-54.2 121-121 121H64c-17.67 0-32-14.3-32-32s14.33-32 32-32h71c31.5 0 57-25.5 57-57 0-21.6-12.2-41.3-31.5-51l-46.8-23.4.2-.4C44.69 284.1 0 233.2 0 176 0 78.8 128.9 0 288 0s288 78.8 288 176zM288 288c123.7 0 224-50.1 224-112S411.7 64 288 64 64 114.1 64 176s100.3 112 224 112z" />
  </svg>
);

const SvgLassoSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgLassoSolid;
