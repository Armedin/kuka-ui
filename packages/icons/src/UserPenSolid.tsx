import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M223.1 256c70.7 0 128-57.31 128-128S293.8 0 223.1 0C153.3 0 96 57.31 96 128s57.3 128 127.1 128zm51.6 48H173.3C77.61 304 0 381.7 0 477.4 0 496.5 15.52 512 34.66 512h286.4c-1.246-5.531-1.43-11.31-.283-17.04l14.28-71.41a49.825 49.825 0 0 1 13.68-25.56l45.72-45.72C363.3 322.4 321.2 304 274.7 304zm96.7 116.6a17.993 17.993 0 0 0-4.924 9.203l-14.28 71.41c-1.258 6.289 4.293 11.84 10.59 10.59l71.42-14.29a17.995 17.995 0 0 0 9.195-4.922l125.3-125.3-72.01-72.01L371.4 420.6zm258.1-164.9-21.1-21.11c-14.06-14.06-36.85-14.06-50.91 0l-38.13 38.14 72.01 72.01 38.13-38.13c14-14.11 14-36.91 0-50.91z" />
  </svg>
);

const SvgUserPenSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgUserPenSolid;
