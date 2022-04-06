import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm0 480c-47.24 0-91.04-14.78-127.2-39.84 4.1-49.26 45-88.16 95.2-88.16h64c50.25 0 91.14 38.94 95.21 88.16C347 465.2 303.2 480 256 480zm155.7-63.3c-14.1-55.4-64-96.7-123.7-96.7h-64c-59.73 0-109.6 41.3-123.7 96.72C58.27 375.1 32 319 32 256 32 132.5 132.5 32 256 32s224 100.5 224 224c0 63-26.3 119.1-68.3 160.7zM256 128c-44.2 0-80 35.8-80 80s35.8 80 80 80 80-35.82 80-80c0-44.2-35.8-80-80-80zm0 128c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.53 48 48-21.5 48-48 48z" />
  </svg>
);

const SvgCircleUser = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCircleUser;
