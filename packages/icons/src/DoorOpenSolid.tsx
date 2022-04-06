import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M560 448h-48V113.5c0-27.25-21.5-49.5-48-49.5l-112 .01V128h96v384h112c8.875 0 16-7.125 16-15.1v-31.1c0-10.7-7.1-17.8-16-17.8zM280.3 1.007l-192 49.75C73.1 54.51 64 67.76 64 82.88V448H16c-8.875 0-16 7.125-16 15.1v31.1C0 504.9 7.125 512 16 512h304V33.13c0-21.5-19.5-37.373-39.7-32.123zM232 288c-13.25 0-24-14.37-24-31.1 0-17.62 10.75-31.1 24-31.1s24 12.6 24 30.2-10.7 32-24 32z" />
  </svg>
);

const SvgDoorOpenSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgDoorOpenSolid;