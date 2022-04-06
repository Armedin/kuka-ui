import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M224 256c70.7 0 128-57.31 128-128S294.7 0 224 0 96 57.31 96 128s57.3 128 128 128zm0-224c52.94 0 96 43.06 96 96 0 52.93-43.06 96-96 96s-96-43.1-96-96c0-52.94 43.1-96 96-96zm50.7 272H173.3C77.61 304 0 381.6 0 477.3c0 19.14 15.52 34.67 34.66 34.67h378.7C432.5 512 448 496.5 448 477.3c0-95.7-77.6-173.3-173.3-173.3zm138.6 176H34.66c-1.46 0-2.66-1.2-2.66-2.7C32 399.4 95.4 336 173.3 336h101.3c78 0 141.4 63.4 141.4 141.3 0 1.5-1.2 2.7-2.7 2.7z" />
  </svg>
);

const SvgUser = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgUser;
