import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M128 96h384v256h64V80c0-26.38-21.62-48-48-48H112c-26.38 0-48 21.62-48 48v272h64V96zm496 287.1H16c-8.75 0-16 7.25-16 16v16c0 35.25 28.75 64 64 64h512c35.25 0 64-28.75 64-64v-16c0-7.9-7.2-16-16-16z" />
  </svg>
);

const SvgLaptopSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgLaptopSolid;
