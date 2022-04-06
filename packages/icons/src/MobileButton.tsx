import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M192 392c-13.31 0-24 10.69-24 24s10.69 24 24 24 24-10.69 24-24-10.7-24-24-24zM288 0H96C60.65 0 32 28.65 32 64v384c0 35.35 28.65 64 64 64h192c35.35 0 64-28.65 64-64V64c0-35.35-28.7-64-64-64zm32 448c0 17.64-14.36 32-32 32H96c-17.64 0-32-14.36-32-32V64c0-17.64 14.36-32 32-32h192c17.64 0 32 14.36 32 32v384z" />
  </svg>
);

const SvgMobileButton = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgMobileButton;
