import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.1c.1 35.5-28.6 64.3-64 64.3H128.1c-35.35 0-64.01-28.7-64.01-64V287.6H32.05C14.02 287.6 0 273.5 0 255.5c0-9 3.004-17 10.01-24L266.4 8.016c7-7.014 15-8.016 22-8.016s15 2.004 21.1 7.014L564.8 231.5c8 7 12.1 15 11 24z" />
  </svg>
);

const SvgHouseBlankSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgHouseBlankSolid;
