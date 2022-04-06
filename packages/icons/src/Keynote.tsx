import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="m505.3 274.5-48.38-96.75C451.4 166.9 440.4 160 428.2 160H128v-16c0-39.75 29.25-72.63 67.38-78.75C202.3 83.25 219.6 96 240 96h64c26.5 0 48-21.5 48-48S330.5 0 304 0h-64c-21.4 0-39.2 14-45.5 33.38C139.1 40.13 96 86.88 96 144v16H83.75c-12.12 0-23.13 6.9-28.63 17.8L6.75 274.5C2.25 283.4 0 293.1 0 303.1V352c0 17.62 14.38 32 32 32h208v96h-96c-8.8 0-16 7.2-16 15.1 0 9.7 7.2 16.9 16 16.9h224c8.801 0 16-7.203 16-16 0-8.801-7.199-16-16-16h-96v-96h208c17.62 0 32-14.38 32-32v-48.9c0-10-2.2-19.7-6.7-28.6zM240 32h64c8.9 0 16 7.12 16 15.1S312.9 64 304 64h-64c-8.9 0-16-7.13-16-16.9S231.1 32 240 32zM83.75 192h344.5l48 96H35.75l48-96zM480 352H32v-32h448v32z" />
  </svg>
);

const SvgKeynote = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgKeynote;
