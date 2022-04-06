import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M492.1 352c10.24 0 17.82-9.473 15.62-19.46L487.1 240h4.961c10.24 0 17.82-9.473 15.62-19.46L485.9 122.7C501.4 114.8 512 98.59 512 80c0-26.5-21.5-48-48-48H48C21.5 32 0 53.5 0 80c0 18.59 10.59 34.75 26.08 42.72L4.32 220.5c-2.207 10 5.377 19.5 15.62 19.5h4.961l-20.58 92.54C2.113 342.5 9.697 352 19.94 352h5.664L3.844 460.9C1.857 470.8 9.408 480 19.52 480h472.1c10.11 0 17.66-9.248 15.68-19.14L486.4 352h5.7zM39.04 448l19.2-96h395.5l19.2 96H39.04zm18.62-208H454.3l17.76 80H39.9l17.76-80zM39.9 208l17.76-80H454.3l17.76 80H39.9zM464 96H48c-8.83 0-16-7.17-16-16s7.17-16 16-16h416c8.8 0 16 7.17 16 16s-7.2 16-16 16z" />
  </svg>
);

const SvgShutters = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgShutters;
