import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M480 240.4V96c0-35.3-28.72-64-64-64H96c-35.28 0-64 28.7-64 64v144.4C12.69 255 0 277.1 0 304v160c0 8.8 7.156 16 16 16s16-7.2 16-16v-48h448v48c0 8.844 7.156 16 16 16s16-7.156 16-16V304c0-26.9-12.7-49-32-63.6zM432 224H272v-32c0-17.64 14.34-32 32-32h112c17.66 0 32 14.36 32 32v33.62c-5.2-1.02-10.5-1.62-16-1.62zM96 64h320c17.66 0 32 14.36 32 32v40.9c-9.5-5.5-20.3-8.9-32-8.9H304c-19.2 0-36.26 8.678-48 22.12C244.3 136.7 227.2 128 208 128H96c-11.71 0-22.55 3.4-32 8.9V96c0-17.64 14.34-32 32-32zM64 192c0-17.64 14.34-32 32-32h112c17.66 0 32 14.36 32 32v32H80c-5.48 0-10.83.6-16 1.6V192zm416 192H32v-80c0-26.5 21.53-48 48-48h352c26.5 0 48 21.5 48 48v80z" />
  </svg>
);

const SvgBedFront = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgBedFront;
