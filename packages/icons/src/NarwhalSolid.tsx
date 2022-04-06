import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="m590.7 214 48.75-192.3C642.237 11.6 633.948.01 622.6-.02a17.426 17.426 0 0 0-14.81 8.148l-99.31 157.7C494.2 162.2 479.4 159.1 464 159.1c-72.28 0-142.2 25.84-197.1 72.85L154.4 328.3C144 338.1 128 330.7 128 317v-34.9l49.8-30.5c8.8-5.9 14.2-15.9 14.2-27.5v-81c0-12.75-14.21-20.36-24.82-13.29l-71.17 47.4-71.13-46.51c-10.64-7-24.88.6-24.88 13.4v80.93a31.968 31.968 0 0 0 14.25 26.57L64 282.1v69.88C64 440.4 135.6 512 224 512h240c97.2 0 176-78.8 176-176 0-47.4-18.8-90.3-49.3-122zM504 319.1c-13.25 0-24-10.75-24-24 0-13.26 10.75-24 24-24s24 10.74 24 24c0 14.2-10.7 24-24 24z" />
  </svg>
);

const SvgNarwhalSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgNarwhalSolid;
