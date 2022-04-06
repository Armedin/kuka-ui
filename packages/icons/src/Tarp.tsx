import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M72 160c0-13.3 10.75-24 24-24 13.3 0 24 10.7 24 24s-10.7 24-24 24c-13.25 0-24-10.7-24-24zm504 124.1c0 12.7-5.1 25-14.1 34L446.1 433.9c-9 9-21.3 14.1-34 14.1H64c-35.35 0-64-28.7-64-64V128c0-35.35 28.65-64 64-64h448c35.3 0 64 28.65 64 64v156.1zM32 384c0 17.7 14.33 32 32 32h320V304c0-26.5 21.5-48 48-48h112V128c0-17.7-14.3-32-32-32H64c-17.67 0-32 14.3-32 32v256zm507.3-88.6c2.1-2 3.5-4.6 4.2-7.4H432c-8.8 0-16 7.2-16 16v111.5c2.8-.7 5.4-2.1 7.4-4.2l115.9-115.9z" />
  </svg>
);

const SvgTarp = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgTarp;
