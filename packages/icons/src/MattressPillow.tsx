import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M176 128c26.5 0 48 21.5 48 48v160c0 26.5-21.5 48-48 48h-64c-26.51 0-48-21.5-48-48V176c0-26.5 21.49-48 48-48h64zm0 32h-64c-8.8 0-16 7.2-16 16v160c0 8.8 7.2 16 16 16h64c8.8 0 16-7.2 16-16V176c0-8.8-7.2-16-16-16zm400-96c35.3 0 64 28.65 64 64v256c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64V128c0-35.35 28.65-64 64-64h512zM256 96H64c-17.67 0-32 14.3-32 32v256c0 17.7 14.33 32 32 32h192V96zm32 0v320h288c17.7 0 32-14.3 32-32V128c0-17.7-14.3-32-32-32H288z" />
  </svg>
);

const SvgMattressPillow = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgMattressPillow;
