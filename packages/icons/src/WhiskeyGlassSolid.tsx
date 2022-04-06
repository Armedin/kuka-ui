import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M479.1 32H32.04C12.55 32-2.324 49.25.3 68.51L56.29 425.1c4.5 31.5 31.49 54.9 63.51 54.9h272.9c31.74 0 58.86-23.38 63.36-54.89l55.61-356.6C514.3 49.25 499.5 32 479.1 32zm-56.4 192H89.49L69.39 96h373.2L422.7 224z" />
  </svg>
);

const SvgWhiskeyGlassSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgWhiskeyGlassSolid;
