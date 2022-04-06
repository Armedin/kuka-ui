import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M128 336c0 8.8-7.2 16-16 16s-16-7.2-16-16V176c0-8.8 7.2-16 16-16s16 7.2 16 16v160zM0 128c0-35.35 28.65-64 64-64h512c35.3 0 64 28.65 64 64v256c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64V128zm32 0v256c0 17.7 14.33 32 32 32h512c17.7 0 32-14.3 32-32V128c0-17.7-14.3-32-32-32H64c-17.67 0-32 14.3-32 32z" />
  </svg>
);

const SvgInputPipe = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgInputPipe;
