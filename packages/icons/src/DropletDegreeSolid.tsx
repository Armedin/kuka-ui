import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M133.4 51.36C90.9 189.26 0 226.86 0 324.16 0 410.2 71.56 480 159.1 480s159.1-69.78 159.1-155.9c0-97.78-90.73-134.1-133.4-272.8-5.4-25.2-43.2-26.3-51.4.06zM368 32c-44.06 0-79.1 35.94-79.1 80s35 80 79.1 80 79.1-35.94 79.1-80-35-80-79.1-80zm0 112c-17.75 0-31.1-14.25-31.1-32s14.25-32 31.1-32c17.75 0 31.1 14.25 31.1 32s-13.3 32-31.1 32z" />
  </svg>
);

const SvgDropletDegreeSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgDropletDegreeSolid;
