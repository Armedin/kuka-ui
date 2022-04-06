import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M80 0c8.84 0 16 7.164 16 16v48h400c8.8 0 16 7.16 16 16s-7.2 16-16 16H96v400c0 8.8-7.16 16-16 16s-16-7.2-16-16V96H16C7.164 96 0 88.84 0 80s7.164-16 16-16h48V16c0-8.836 7.16-16 16-16zm48 160c0-17.7 14.3-32 32-32h288c17.7 0 32 14.3 32 32v192c0 17.7-14.3 32-32 32H160c-17.7 0-32-14.3-32-32V160zm32 192h288V160H160v192z" />
  </svg>
);

const SvgSignHanging = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgSignHanging;
