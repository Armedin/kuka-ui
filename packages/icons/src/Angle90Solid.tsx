import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M312.6 384h49.13c-7.244-37.39-20.83-72.46-39.39-104.3l-41.1 24.66C295.4 328.9 306.1 355.6 312.6 384zm-49-106.4 41.31-24.79a338.43 338.43 0 0 0-77.72-77.72L202.4 216.4c23.4 17.2 44 37.8 61.2 61.2zM416 416H64V63.1C64 46.33 49.67 32 32 32S0 46.33 0 63.1V448c0 17.67 14.33 32 32 32h384c17.7 0 32-14.3 32-32s-14.3-32-32-32zM200.3 157.7c-31.8-18.6-66.9-32.2-104.3-39.4v49.13c28.39 6.477 55.15 17.16 79.68 31.36l24.62-41.09z" />
  </svg>
);

const SvgAngle90Solid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgAngle90Solid;
