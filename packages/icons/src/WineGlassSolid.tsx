import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" {...props}>
    <path d="M232 464h-40.01V346.7c68.51-15.88 118-79.86 111.4-154.1L287.5 14.5C286.8 6.25 279.9 0 271.8 0H48.23C40.1 0 33.22 6.25 32.47 14.5L16.6 192.6C9.974 266.85 59.48 330.8 128 346.8V464H87.98c-22.13 0-40.01 17.88-40.01 40 0 4.375 3.626 8 8.002 8h208c4.376 0 8.002-3.625 8.002-8C272 481.9 254.1 464 232 464zM77.72 48h164.6l7.08 80H70.58l7.14-80z" />
  </svg>
);

const SvgWineGlassSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgWineGlassSolid;
