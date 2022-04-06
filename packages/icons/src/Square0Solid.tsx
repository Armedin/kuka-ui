import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M224 176c-26.5 0-48 21.5-48 48v64c0 26.47 21.53 48 48 48s48-21.53 48-48v-64c0-26.5-21.5-48-48-48zM384 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h320c35.35 0 64-28.65 64-64V96c0-35.35-28.7-64-64-64zm-64 256c0 52.94-43.06 96-96 96s-96-43.06-96-96v-64c0-52.94 43.06-96 96-96s96 43.06 96 96v64z" />
  </svg>
);

const SvgSquare0Solid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgSquare0Solid;
