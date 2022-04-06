import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M320 64H64C28.65 64 0 92.65 0 128v255.1c0 35.35 28.65 64 64 64h256c35.35 0 64-28.65 64-64V128c0-35.35-28.7-64-64-64zm32 320c0 17.64-14.36 32-32 32H64c-17.64 0-32-14.36-32-32V128c0-17.64 14.36-32 32-32h256c17.64 0 32 14.36 32 32v256z" />
  </svg>
);

const SvgStop = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgStop;
