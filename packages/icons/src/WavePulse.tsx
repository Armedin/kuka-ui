import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M640 240c0 8.8-7.2 16-16 16H490.9l-60 150c-2.625 6.375-8.375 10.25-16 9.1-6.9.4-12.8-4.5-14.4-11.2l-78.75-315-82 410.3c-1.45 7.3-7.85 12.6-15.35 12.8h-.4c-7.25 0-13.75-5-15.5-12.12L147.5 256H16c-8.799 0-16-7.2-16-16s7.201-15.1 16-15.1h144c7.375 0 13.75 4.993 15.5 12.12l46.75 187 82-410.3C305.8 5.5 312 .25 319.5 0c8.125.125 14.25 4.875 16 12.12l84 336 45.63-114.1C467.5 228 473.5 224 480 224h144c8.8 0 16 7.2 16 16z" />
  </svg>
);

const SvgWavePulse = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgWavePulse;
