import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M488 32c-13.25 0-24 10.75-24 23.1V64h-32v-8.9c0-12.35-10.7-23.1-24-23.1s-24 10.75-24 23.1V64h-96V16c0-8.837-7.2-16-16-16h-32c-8.8 0-16 7.163-16 16v48h-96v-8.9c0-12.35-10.7-23.1-24-23.1S80 42.75 80 55.1V64H48v-8.9C48 42.75 37.25 32 24 32S0 42.75 0 55.1V96c0 17.67 14.33 32 32 32h51.16L224 221.9V512h64V221.9L428.8 128H480c17.67 0 32-14.33 32-32V55.1c0-12.35-10.7-23.1-24-23.1zm-347.2 96H224v55.44L140.8 128zm147.2 0h83.16L288 183.4V128z" />
  </svg>
);

const SvgUtilityPoleSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgUtilityPoleSolid;
