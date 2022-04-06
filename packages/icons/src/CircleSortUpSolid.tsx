import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="m255.9 378.5 58.8-58.5H197.4l58.5 58.5zM256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm104.6 319.4L269 410.6c-3.5 3.4-8.1 5.4-13 5.4s-9.625-1.1-13.12-5.375l-91.5-91.25C139.9 307.9 148 288 164.5 288h183c16.5 0 24.6 19.9 13.1 31.4zm-13.1-96.3H164.6c-16.5 0-24.69-19.88-13.19-31.38l91.53-91.25C246.4 98 251.1 95.1 256 95.1s9.5 2 13 5.375l91.63 91.25C372.1 204.1 364 223.1 347.5 223.1z" />
  </svg>
);

const SvgCircleSortUpSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCircleSortUpSolid;
