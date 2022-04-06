import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M438.6 361.4c12.5 12.5 12.5 32.75 0 45.25l-18.75 18.75c-14.41 14.38-34.31 22.62-54.63 22.62C322.7 448 288 413.4 288 370.8V128.1H160v152.4c0 51.75-12.23 103.6-35.38 149.9-5.609 11.22-16.91 17.69-28.66 17.69a32.075 32.075 0 0 1-14.28-3.375c-15.81-7.906-22.22-27.12-14.31-42.94C86.11 364.3 96 322.3 96 280.5V128H32c-17.67 0-32-14.31-32-32s14.33-32 32-32h384c17.67 0 32 14.31 32 32s-14.33 32-32 32h-64v242.7c.016 10.78 14.94 17.06 22.64 9.344l18.73-18.72c12.53-12.424 32.73-12.424 45.23.076z" />
  </svg>
);

const SvgPiSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgPiSolid;
