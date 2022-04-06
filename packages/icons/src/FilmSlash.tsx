import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M633.9 483.4 25.92 3.42c-6.938-5.453-17-4.25-22.48 2.641-5.469 6.938-4.281 17 2.641 22.48l608 480C617 510.9 620.5 512 623.1 512c4.734 0 9.422-2.094 12.58-6.078C642 498.1 640.8 488.9 633.9 483.4zM448 64v211.5l32 25.26V272h64v79.28l32 25.26V96c0-35.35-28.65-64-64-64H139.6l40.53 32H448zm32 0h32c17.64 0 32 14.36 32 32v48h-64V64zm0 112h64v64h-64v-64zM192 448V236.5l-32-25.3V240H96v-79.3l-32-25.3V416c0 35.35 28.65 64 64 64h372.4l-40.53-32H192zm-32 0h-32c-17.64 0-32-14.36-32-32v-48h64v80zm0-112H96v-64h64v64z" />
  </svg>
);

const SvgFilmSlash = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgFilmSlash;
