import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M384 288c35.35 0 64-28.65 64-64v-96c0-35.35-28.65-64-64-64H64C28.65 64 0 92.65 0 128v96c0 35.35 28.65 64 64 64h78.03c29.37 0 54.96-19.99 62.09-48.48l4.359-17.43C210.5 214 217.2 209.1 224 209.1s13.5 4.041 15.52 12.12l4.359 17.43C251 268 276.6 288 305.1 288H384zM544 32c-17.69 0-32 14.31-32 32v96h64V64c0-17.69-14.3-32-32-32zm-32 335.4c0 44.5-36.1 80.6-80.6 80.6-39.84 0-74.13-29.47-79.75-68.56-2.332-15.9-15.74-27.47-31.51-27.47-27.19 0-32.19 25.67-32.19 32.02C287.1 390.9 308.4 512 431.4 512c79.8 0 144.6-64.8 144.6-144.6V192h-64v175.4z" />
  </svg>
);

const SvgMaskSnorkelSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgMaskSnorkelSolid;
