import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M492.7 58.75c25 24.99 25 65.55 0 90.55l-48.4 48.4-130-129.98 48.4-48.4c25-24.998 65.6-24.998 90.6 0l39.4 39.43zM58.57 323.5 291.7 90.34l130 129.96-233.2 233.1c-10.4 10.4-23.3 18.1-37.4 22.2L30.77 511c-8.42 2.5-17.53.2-23.74-6.9-6.21-5.3-8.532-14.4-6.054-22.9L36.37 360.9c4.16-14.1 11.79-27 22.2-37.4zM552 464c13.3 0 24 10.7 24 24s-10.7 24-24 24H248c-13.3 0-24-10.7-24-24s10.7-24 24-24h304z" />
  </svg>
);

const SvgPenLineSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgPenLineSolid;
