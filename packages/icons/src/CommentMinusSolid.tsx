import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M256 32C114.6 32 .028 125.1.028 240c0 49.63 21.35 94.98 56.97 130.7C44.5 421.1 2.73 466 2.23 466.5c-2.25 2.25-2.875 5.734-1.5 8.734C1.979 478.2 4.75 480 8 480c66.25 0 115.1-31.76 140.6-51.39C181.2 440.9 217.6 448 256 448c141.4 0 255.1-93.13 255.1-208S397.4 32 256 32zm80 231.1H175.1c-12.4 0-23.1-9.8-23.1-23.1 0-13.26 10.74-23.1 23.1-23.1h160c14.2-.9 24.9 9.8 24.9 23.1s-10.7 23.1-24 23.1z" />
  </svg>
);

const SvgCommentMinusSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCommentMinusSolid;
