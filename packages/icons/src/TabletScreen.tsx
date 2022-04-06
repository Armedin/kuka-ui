import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M384 0H64C28.65 0 0 28.65 0 64v384c0 35.35 28.65 63.1 64 63.1h320c35.35 0 64-28.65 64-63.1V64c0-35.35-28.7-64-64-64zm32 448c0 17.64-14.36 32-32 32H64c-17.64 0-32-14.36-32-32v-96h384v96zm0-128H32V64c0-17.64 14.36-32 32-32h320c17.64 0 32 14.36 32 32v256zM192 432h64c8.836 0 16-7.164 16-16 0-8.838-7.164-16-16-16h-64c-8.836 0-16 7.162-16 16 0 8.8 7.2 16 16 16z" />
  </svg>
);

const SvgTabletScreen = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgTabletScreen;
