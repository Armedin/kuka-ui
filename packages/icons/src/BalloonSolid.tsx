import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M384 192C384 86 298.04 0 192 0S0 85.96 0 192c0 84.42 101.3 196.4 158.8 238.7l-29.07 58.14a16.036 16.036 0 0 0 .688 15.56C133.3 509.1 138.5 512 144 512h96c5.531 0 10.69-2.875 13.62-7.594a16.038 16.038 0 0 0 .688-15.56l-29.07-58.14C282.7 388.4 384 276.4 384 192zM176 96c-44.1 0-80 35.9-80 80 0 8.8-7.16 16-16 16s-16-7.2-16-16c0-61.7 50.3-112 112-112 8.8 0 16 7.16 16 16s-7.2 16-16 16z" />
  </svg>
);

const SvgBalloonSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgBalloonSolid;
