import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" {...props}>
    <path d="M176 322.9V160c0-8.75-7.25-16-16-16s-16 7.25-16 16v162.9c-18.62 6.625-32 24.25-32 45.13 0 26.5 21.5 48 48 48s48-21.5 48-48c0-20.93-13.4-38.53-32-45.13zm96-44.4V112C272 50.13 221.88 0 160.9 0S48 50.13 48 112v166.5C28.25 303.25 16 334 16 368c0 79.5 64.5 143.1 144 143.1S304 447.5 304 368c0-34-12.2-64.9-32-89.5zM160 448c-44.13 0-80-35.87-80-79.1 0-25.5 12.25-48.88 32-63.75v-192.3c0-26.5 21.5-48 48-48s48 21.5 48 48v192.3c19.75 14.75 32 38.25 32 63.75 0 43.2-35.9 79.1-80 79.1z" />
  </svg>
);

const SvgTemperatureThreeQuartersSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgTemperatureThreeQuartersSolid;
