import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="m168 90.74 53.1-53.08c28.1-28.121 73.7-28.121 101.8 0L474.3 189.1c28.2 28.1 28.2 73.7 0 101.8L283.9 481.4c-37.5 37.5-98.3 37.5-135.8 0L30.63 363.9c-37.493-37.5-37.493-98.3 0-135.8l92.07-93-81.33-80.47c-12.49-12.5-12.49-32.76 0-45.258 12.5-12.496 32.76-12.496 45.26 0L168 90.74zM75.88 273.4c-4.19 4.2-6.98 9.2-8.36 13.7H386.7l42.4-41.4c3.1-3.2 3.1-8.2 0-11.4L277.7 82.91a8.112 8.112 0 0 0-11.4 0l-53 53.09 49.3 49.4c12.5 12.5 12.5 32.7 0 45.2s-32.7 12.5-45.2 0L168 181.3l-92.12 92.1z" />
  </svg>
);

const SvgFillSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgFillSolid;
