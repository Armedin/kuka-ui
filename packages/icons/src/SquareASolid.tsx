import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M183.1 295.6h80.04L224 208.5l-40.9 87.1zM384 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h320c35.35 0 64-28.65 64-64V96c0-35.35-28.7-64-64-64zm-53.9 349.8a23.963 23.963 0 0 1-10.05 2.229 23.99 23.99 0 0 1-21.81-14l-12.03-26.18H161.8l-12.03 26.18c-5.578 12.09-19.77 17.36-31.86 11.77-12.03-5.557-17.28-19.9-11.73-31.99l95.99-208.1c7.844-17.08 35.75-17.08 43.59 0l95.99 208.1c5.55 12.091.35 26.391-11.65 31.991z" />
  </svg>
);

const SvgSquareASolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgSquareASolid;
