import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M128 32H32C14.4 32 0 46.4 0 64v384c0 17.6 14.4 32 32 32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H64V96h64c17.7 0 32-14.33 32-32s-14.3-32-32-32zm288 0h-96c-17.7 0-32 14.33-32 31.1S302.3 96 319.1 96H384v320h-64c-17.7 0-32 14.3-32 31.1s14.3 32.9 31.1 32.9H416c17.6 0 32-14.4 32-32V64c0-17.6-14.4-32-32-32z" />
  </svg>
);

const SvgBracketsSquareSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgBracketsSquareSolid;
