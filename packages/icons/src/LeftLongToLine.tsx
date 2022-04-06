import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M0 80c0-8.84 7.164-16 16-16 8.84 0 16 7.16 16 16v352c0 8.8-7.16 16-16 16-8.836 0-16-7.2-16-16V80zm640 152v47.1c0 23-18 40-40.9 40H287.7l-.2 40c0 16.8-9.4 31.2-24 37.5-14.6 6.4-32.4 3.6-43.2-7.3l-112.1-104C100.1 277.8 96 266.9 96 256c-.9-10.9 4.1-21.8 12.2-29.3l112.1-104c10.8-10.8 28.6-14.6 43.2-7.3 14.6 6.3 24 20.7 24 36.6l.2 40h311.4c22.9 0 40.9 17.9 40.9 40zm-510.9 18.2c-1.3 2-1.7 4.5-1.7 5.8 0 1.3.4 3.8 1.7 5.9l112.9 104c5.2 4.7 13.5 1.1 13.5-6.8v-72h343.6c5.3 0 8.9-2.7 8.9-8V232c0-4.4-3.6-8-8.9-8H255.5v-72c0-7.9-8.3-10.6-13.5-5.9L129.1 250.2z" />
  </svg>
);

const SvgLeftLongToLine = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgLeftLongToLine;
