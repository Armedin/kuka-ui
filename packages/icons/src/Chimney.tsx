import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M416 32H32C14.33 32 0 46.33 0 64v64c0 17.67 14.33 32 32 32v303.1c0 7.971 5.448 15.36 13.32 16.64C55.34 481.4 64 473.7 64 464v-48h224v48c0 8.8 7.2 16 15.1 16s16.9-7.2 16.9-16v-48h64v47.15c0 7.971 5.448 15.36 13.32 16.64C407.3 481.4 416 473.7 416 464V160c17.67 0 32-14.33 32-32V64c0-17.67-14.3-32-32-32zM128 256H64v-96h64v96zM64 384v-96h128v96H64zm320 0H224v-96h160v96zm0-128H160v-96h224v96zm32-128H32V64h384v64z" />
  </svg>
);

const SvgChimney = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgChimney;
