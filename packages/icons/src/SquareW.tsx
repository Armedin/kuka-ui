import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M384 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h320c35.35 0 64-28.65 64-64V96c0-35.35-28.7-64-64-64zm32 384c0 17.64-14.36 32-32 32H64c-17.64 0-32-14.36-32-32V96c0-17.64 14.36-32 32-32h320c17.64 0 32 14.36 32 32v320zm-59.6-287.4c-8.4-2.5-17.4 2.5-19.8 11L288 309.8l-48.61-170.2c-3.938-13.69-26.84-13.69-30.78 0L160 309.8l-48.6-170.2c-3.3-8.5-11.4-13.5-19.79-11-8.5 2.406-13.42 11.28-11 19.78l64 224c3.938 13.69 26.84 13.69 30.78 0L224 202.3l48.61 170.2c1.99 6.8 8.19 11.5 15.29 11.5s13.48-4.75 15.45-11.59l64-224c2.45-8.51-2.45-17.41-10.95-19.81z" />
  </svg>
);

const SvgSquareW = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgSquareW;
