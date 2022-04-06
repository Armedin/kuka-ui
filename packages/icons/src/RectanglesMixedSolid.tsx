import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M0 80c0-26.51 21.49-48 48-48h224c26.5 0 48 21.49 48 48v128c0 26.5-21.5 48-48 48H48c-26.51 0-48-21.5-48-48V80zm384 0c0-26.51 21.5-48 48-48h96c26.5 0 48 21.49 48 48v256c0 26.5-21.5 48-48 48h-96c-26.5 0-48-21.5-48-48V80zm-96 224c26.5 0 48 21.5 48 48v80c0 26.5-21.5 48-48 48H112c-26.51 0-48-21.5-48-48v-80c0-26.5 21.49-48 48-48h176z" />
  </svg>
);

const SvgRectanglesMixedSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgRectanglesMixedSolid;
