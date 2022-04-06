import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512" {...props}>
    <path d="M128 32H32C14.4 32 0 46.4 0 64v384c0 17.6 14.4 32 32 32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H64V96h64c17.7 0 32-14.33 32-32s-14.3-32-32-32z" />
  </svg>
);

const SvgBracketSquareSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgBracketSquareSolid;
