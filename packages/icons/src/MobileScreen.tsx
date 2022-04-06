import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M288 0H96C60.65 0 32 28.65 32 64v384c0 35.35 28.65 64 64 64h192c35.35 0 64-28.65 64-64V64c0-35.35-28.7-64-64-64zm32 448c0 17.64-14.36 32-32 32H96c-17.64 0-32-14.36-32-32v-96h256v96zm0-128H64V64c0-17.64 14.36-32 32-32h192c17.64 0 32 14.36 32 32v256zM160 432h64c8.836 0 16-7.164 16-16 0-8.838-7.164-16-16-16h-64c-8.836 0-16 7.162-16 16 0 8.8 7.2 16 16 16z" />
  </svg>
);

const SvgMobileScreen = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgMobileScreen;
