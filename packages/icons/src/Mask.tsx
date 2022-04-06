import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M288 64C39.52 64 0 182.1 0 273.5 0 379.5 78.8 448 176 448c27.33 0 51.21-6.516 66.11-36.79l19.93-40.5C268.3 358.6 278.1 352.4 288 352.1c9.9.371 19.7 6.501 25.97 18.63l19.93 40.5C348.8 441.5 372.7 448 400 448c97.2 0 176-68.51 176-174.5C576 182.1 536.5 64 288 64zm112 352c-23.88 0-31.09-6.104-37.39-18.92l-20.21-41.05c-11.19-21.67-31.08-35.1-53.2-35.93H288l-1.199.043c-22.12.83-42.01 14.26-53.48 36.48l-19.92 40.49C207.1 409.9 199.9 416 176 416c-84.79 0-144-58.6-144-142.5C32 197.3 58.54 96 288 96s256 101.3 256 177.5c0 83.9-59.2 142.5-144 142.5zM160 192c-35.3 0-64 28.7-64 64s28.65 64 64 64 64-28.65 64-64-28.7-64-64-64zm0 96c-17.6 0-32-14.4-32-32s14.36-32 32-32 32 14.36 32 32-14.4 32-32 32zm256-96c-35.35 0-64 28.65-64 64s28.65 64 64 64 64-28.65 64-64-28.7-64-64-64zm0 96c-17.64 0-32-14.36-32-32s14.36-32 32-32 32 14.36 32 32-14.4 32-32 32z" />
  </svg>
);

const SvgMask = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgMask;
