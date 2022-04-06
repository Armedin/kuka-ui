import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M429.3 288.4c-7.8 1.3-13.3 8.7-13.3 16.6v120.5L291.9 301.4c-6.248-6.25-16.38-6.352-22.63-.102s-6.246 16.48.002 22.73l124.1 124.1H272.8c-7.969 0-15.35 5.453-16.62 13.32C254.6 471.5 262.3 480.2 272 480.2h160c8.836 0 16-7.164 16-16v-160c0-9.7-8.6-17.4-18.7-15.8zm-273.2-77.5c6.3 6.3 16.4 6.2 22.7-.1s6.247-16.28-.001-22.53L27.91 37.48c-5.635-5.637-14.71-7-21.17-2.34-8.24 5.94-8.924 17.5-2.052 24.37L156.1 210.9zM432 32H272c-8.8 0-16 7.16-16 16s7.2 16 16 16h121.4L4.688 452.7c-6.25 6.25-6.25 16.38 0 22.62s16.38 6.25 22.62 0L416 86.63V208c0 8.8 7.2 16 16 16s16-7.2 16-16V48c0-8.84-7.2-16-16-16z" />
  </svg>
);

const SvgArrowsCross = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgArrowsCross;
