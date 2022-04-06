import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M145.6 414a23.995 23.995 0 0 0 14.41-22l-.01-88.9h272c44.13 0 80-35.89 80-80V48c0-8.84-7.2-16-16-16s-16 7.16-16 16v175.1c0 26.47-21.53 47.1-48 47.1H160l-.9-86.2c0-9.547-5.656-18.19-14.41-22s-17.99-2.1-24.99 4.4l-112 104C2.556 275.2 0 281.6 0 287.1s2.556 12.85 7.671 17.6l112 104c7.029 7.4 17.129 9.1 25.929 5.3zM128 373.7 35.75 288 128 202.3v171.4z" />
  </svg>
);

const SvgTurnDownLeft = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgTurnDownLeft;
