import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.1c.1 35.5-28.6 64.3-64 64.3H128.1c-35.35 0-64.01-28.7-64.01-64V287.6H32.05C14.02 287.6 0 273.5 0 255.5c0-9 3.004-17 10.01-24L266.4 8.016c7-7.014 15-8.016 22-8.016s15 2.004 21.1 7.014L416 100.7V64c0-17.67 14.3-32 32-32h32c17.7 0 32 14.33 32 32v121l52.8 46.5c8 7 12.1 15 11 24zM184 304l92.7 92.7c6.2 6.2 16.4 6.2 22.6 0L392 304c22.1-22.1 22.1-57.9 0-80s-57.9-22.1-80 0l-24 24-24-24c-22.1-22.1-57.9-22.1-80 0s-22.1 57.9 0 80z" />
  </svg>
);

const SvgHouseChimneyHeartSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgHouseChimneyHeartSolid;
