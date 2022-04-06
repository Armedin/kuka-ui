import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="m415.1 192 95.1-128-63.1-64-128 96-.02 73.38-98.5 98.5C209.2 260 195.2 256 181.2 256c-19.12 0-38.25 7.25-52.87 21.88l-117.4 117.7c-14.62 14.5-14.62 38.17 0 52.79l52.75 52.75C71.03 508.5 80.59 512 90.22 512c9.5 0 18.98-3.542 26.23-10.92l117.6-117.5c25.25-25.25 28.63-64.25 10-93.13L342.6 192h72.5zm-64-80 93-69.75L468.85 67l-69.75 93h-48v-48zM211.3 360.9 93.9 478.4c-1 1-2.375 1.5-3.75 1.5-1 0-2.5-.25-3.75-1.5l-52.81-52.9c-2-2.125-2-5.375 0-7.5l117.5-117.4c8-8.125 18.75-12.5 30.12-12.5 11.37 0 22.13 4.375 30.13 12.5 15.76 16.6 15.76 43.6-.04 60.3z" />
  </svg>
);

const SvgScrewdriver = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgScrewdriver;
