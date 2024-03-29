import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M0 24C0 10.75 10.75 0 24 0h464c13.3 0 24 10.75 24 24s-10.7 24-24 24H24C10.75 48 0 37.25 0 24zm128 72c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32H64c-17.67 0-32-14.3-32-32v-64c0-17.7 14.33-32 32-32h64zm0 288c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32H64c-17.67 0-32-14.3-32-32v-64c0-17.7 14.33-32 32-32h64zm64-256c0-17.7 14.3-32 32-32h64c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32h-64c-17.7 0-32-14.3-32-32v-64zm96 256c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32h-64c-17.7 0-32-14.3-32-32v-64c0-17.7 14.3-32 32-32h64zm64-256c0-17.7 14.3-32 32-32h64c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32h-64c-17.7 0-32-14.3-32-32v-64zm96 256c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32h-64c-17.7 0-32-14.3-32-32v-64c0-17.7 14.3-32 32-32h64zm40-96c13.3 0 24 10.7 24 24s-10.7 24-24 24H24c-13.25 0-24-10.7-24-24s10.75-24 24-24h464z" />
  </svg>
);

const SvgGridDividersSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgGridDividersSolid;
