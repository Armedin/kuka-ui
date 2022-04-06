import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M560 480h-80V80c0-44.12-35.9-80-80-80H176c-44.1 0-80 35.88-80 80v400H16c-8.836 0-16 7.2-16 16s7.164 16 16 16h544c8.836 0 16-7.164 16-16 0-8.8-7.2-16-16-16zm-112 0H128V80c0-26.47 21.5-48 48-48h224c26.5 0 48 21.53 48 48v400zm-64-248c-13.25 0-24 10.75-24 24s10.7 24 24 24 24-10.7 24-24-10.7-24-24-24z" />
  </svg>
);

const SvgDoorClosed = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgDoorClosed;
