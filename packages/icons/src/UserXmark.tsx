import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M224 256c70.7 0 128-57.31 128-128S294.7 0 224 0 96 57.31 96 128s57.3 128 128 128zm0-224c52.94 0 96 43.06 96 96 0 52.93-43.06 96-96 96s-96-43.1-96-96c0-52.94 43.1-96 96-96zm50.7 272H173.3C77.61 304 0 381.6 0 477.3 0 496.5 15.52 512 34.66 512h378.7c19.14 0 34.64-15.5 34.64-34.7 0-95.7-77.6-173.3-173.3-173.3zm138.6 176H34.66c-1.46 0-2.66-1.2-2.66-2.7C32 399.4 95.4 336 173.3 336h101.4c77.9 0 141.3 63.4 141.3 141.3 0 1.5-1.2 2.7-2.7 2.7zm153.3-256 52.69-52.69c6.25-6.25 6.25-16.38 0-22.62s-16.38-6.25-22.62 0L544 201.4l-52.69-52.69c-6.25-6.25-16.38-6.25-22.62 0s-6.25 16.38 0 22.62L521.4 224l-52.69 52.69c-6.25 6.25-6.25 16.38 0 22.62 6.246 6.246 16.37 6.254 22.62 0L544 246.6l52.69 52.69c6.246 6.246 16.37 6.254 22.62 0 6.25-6.25 6.25-16.38 0-22.62L566.6 224z" />
  </svg>
);

const SvgUserXmark = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgUserXmark;
