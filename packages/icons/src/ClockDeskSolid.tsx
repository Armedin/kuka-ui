import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M448 224c0 123.7-100.3 224-224 224S0 347.7 0 224 100.3 0 224 0s224 100.3 224 224zM200 120v104c0 6.4 2.5 12.5 7 16.1l48 48c9.4 10.2 24.6 10.2 33.1 0 10.2-8.5 10.2-23.7 0-33.1L248 214.1V120c0-13.3-10.7-24-24-24s-24 10.7-24 24zm24 360c96.4 0 180.3-53.3 224-132v116c0 26.5-21.5 48-48 48H48c-26.51 0-48-21.5-48-48V348c43.67 78.7 127.6 132 224 132z" />
  </svg>
);

const SvgClockDeskSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgClockDeskSolid;
