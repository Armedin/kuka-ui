import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M496 32H80C35.88 32 0 67.88 0 112v224c0 44.1 35.88 80 80 80 8.84 0 16-7.2 16-16s-7.16-16-16-16c-26.47 0-48-21.5-48-48V112c0-26.47 21.53-48 48-48h416c26.5 0 48 21.53 48 48v224c0 26.47-21.53 48-48 48-8.844 0-16 7.156-16 16s7.156 16 16 16c44.13 0 80-35.88 80-80V112c0-44.12-35.9-80-80-80zM310.6 297.4c-12.5-12.5-32.86-12.5-45.36 0l-127.1 128C117.3 445.5 131.7 480 160 480h255.9c28.37 0 42.73-34.5 22.62-54.63L310.6 297.4zM160 448l127.1-128 128 128H160z" />
  </svg>
);

const SvgAirplay = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgAirplay;
