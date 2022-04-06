import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M432 16v11.57c0 37.26 8.7 74.03 25.3 107.33l4.8 9.5c19.2 33.1 40.6 81.1 39.9 136.6-.7 55-23.1 115.3-86.9 174.1 0 .3.9.6.9.9v40c0 8.8-7.2 16-16 16s-16-7.2-16-16v-32h-64v32c0 8.8-7.2 16-16 16s-16-7.2-16-16v-32h-64v32c0 8.8-7.2 16-16 16s-16-7.2-16-16v-32h-64v32c0 8.8-7.2 16-16 16s-16-7.2-16-16v-40c0-.3.01-.6.03-.9C33.08 396.3 10.71 336 10 281c-.716-55.5 20.65-103.5 39.92-136.6l4.74-9.5C71.32 101.6 79.1 64.83 79.1 27.57V16c0-8.836 8.06-16 16-16 9.7 0 16 7.164 16 16v11.57c0 42.22-8.9 83.83-27.82 121.63l-4.97 10c-.15.3-.32.6-.49.9-18 30.8-36.43 73.1-36.72 120.5 1.49 45.5 19.64 97.9 77.1 151.4h275.6c57.5-53.5 75.6-105.9 76.2-151.4.6-47.4-17.8-89.7-35.8-120.5-.2-.3-.4-.6-.5-.9l-5-10C409.8 111.4 400 69.79 400 27.57V16c0-8.836 7.2-16 16-16s16 7.164 16 16zM255.1 96c9.7 0 16.9 7.2 16.9 16v128c0 8.8-7.2 16-16.9 16-7.9 0-16-7.2-16-16V112c0-8.8 8.1-16 16-16zM280 320c0 13.3-10.7 24-24.9 24-12.4 0-24-10.7-24-24s11.6-24 24-24c14.2 0 24.9 10.7 24.9 24z" />
  </svg>
);

const SvgTirePressureWarning = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgTirePressureWarning;