import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M576 96H400.9l-45.25-45.25C342.7 38.74 326.5 32 309.5 32H192c-35.3 0-64 28.65-64 64v256c0 35.35 28.65 64 64 64h384c35.35 0 64-28.65 64-64V160c0-35.3-28.7-64-64-64zm32 256c0 17.64-14.36 32-32 32H192c-17.64 0-32-14.36-32-32V96c0-17.64 14.36-32 32-32h117.5c8.549 0 16.58 3.328 22.63 9.375L386.7 128H576c17.64 0 32 14.36 32 32v192zM432 480H128c-35.35 0-64-28.65-64-64V176c0-8.8-7.16-16-16-16s-16 7.2-16 16v240c0 53.02 42.98 96 96 96h304c8.836 0 16-7.164 16-16s-7.2-16-16-16z" />
  </svg>
);

const SvgFolders = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgFolders;
