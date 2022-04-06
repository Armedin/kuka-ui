import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="m177.1 228.6 30.8 91.4h96.5l29.62-91.38L256 172.1l-78.9 56.5zM255.1 0C114.6 0 0 114.6 0 256s114.6 256 256 256 255.1-114.6 255.1-255.1S397.4 0 255.1 0zm161.5 360.9-85.4-1.297-25.15 81.59C290.1 445.5 273.4 448 256 448s-34.09-2.523-50.09-6.859L180.8 359.6l-85.4 1.297c-18.12-27.66-29.15-60.27-30.88-95.31L134.3 216.4l-27.7-80.8c21.16-26.21 49.09-46.61 81.06-58.84L256 128l68.29-51.22c31.98 12.23 59.9 32.64 81.06 58.84L377.7 216.4l69.78 49.1c-1.68 35.1-12.68 67.7-30.88 95.4z" />
  </svg>
);

const SvgFutbolSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgFutbolSolid;
