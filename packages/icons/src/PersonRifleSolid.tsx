import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M265.2 192c25.4 0 49.8 7.1 70.8 19.9V512H144V337.7l-53.56 90.6c-11.23 19.1-35.76 25.4-54.78 14.1-19.02-11.2-25.33-35.7-14.09-54.7L97.7 258.8c24.5-41.4 69-66.8 117.1-66.8h50.4zM320 80c0 44.2-35.8 80-80 80s-80-35.8-80-80c0-44.18 35.8-80 80-80s80 35.82 80 80zm144-64v116.3c9.6 5.5 16 15.9 16 27.7v109.3l16-5.3v-56c0-8.8 7.2-16 16-16h16c8.8 0 16 7.2 16 16v84.5c0 6.9-4.4 13-10.9 15.1L480 325.3V352h48c8.8 0 16 7.2 16 16v16c0 8.8-7.2 16-16 16h-44l23 92.1c2.6 10.1-5.1 19.9-15.5 19.9H432c-8.8 0-16-7.2-16-16v-96h-16c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32v-32c0-11.8 6.4-22.2 16-27.7V32c-8.8 0-16-7.16-16-16 0-8.836 7.2-16 16-16h32c8.8 0 16 7.164 16 16z" />
  </svg>
);

const SvgPersonRifleSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgPersonRifleSolid;