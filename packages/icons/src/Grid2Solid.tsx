import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M192 176c0 26.5-21.5 48-48 48H48c-26.51 0-48-21.5-48-48V80c0-26.51 21.49-48 48-48h96c26.5 0 48 21.49 48 48v96zm0 256c0 26.5-21.5 48-48 48H48c-26.51 0-48-21.5-48-48v-96c0-26.5 21.49-48 48-48h96c26.5 0 48 21.5 48 48v96zm64-352c0-26.51 21.5-48 48-48h96c26.5 0 48 21.49 48 48v96c0 26.5-21.5 48-48 48h-96c-26.5 0-48-21.5-48-48V80zm192 352c0 26.5-21.5 48-48 48h-96c-26.5 0-48-21.5-48-48v-96c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48v96z" />
  </svg>
);

const SvgGrid2Solid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgGrid2Solid;
