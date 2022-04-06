import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M336 0c26.5 0 48 21.49 48 48v319.8c-38.2 21.4-64 62.2-64 109.1 0 12.9 3.6 24.9 9.9 35.1H240v-80c0-26.5-21.5-48-48-48s-48 21.5-48 48v80H48c-26.51 0-48-21.5-48-48V48C0 21.49 21.49 0 48 0h288zM64 272c0 8.8 7.16 16 16 16h32c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16H80c-8.84 0-16 7.2-16 16v32zm112-48c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16h-32zm80 48c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v32zM80 96c-8.84 0-16 7.2-16 16v32c0 8.8 7.16 16 16 16h32c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16H80zm80 48c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v32zm112-48c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16h-32zm304 176c0 44.2-35.8 80-80 80s-80-35.8-80-80 35.8-80 80-80 80 35.8 80 80zM352 477.1c0-51.4 41.7-93.1 93.1-93.1h101.8c51.4 0 93.1 41.7 93.1 93.1 0 19.3-15.6 34.9-34.9 34.9H386.9c-19.3 0-34.9-15.6-34.9-34.9z" />
  </svg>
);

const SvgBuildingUserSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgBuildingUserSolid;