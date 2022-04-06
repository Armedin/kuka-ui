import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M319.1 352c-35.35 0-64 28.66-64 63.1s28.66 64 64 64 64-28.66 64-64-27.8-63.1-64-63.1zm.9-160c-70.2 0-137.9 25.6-190.5 72-13.2 11.7-14.5 31.9-2.8 45.2 11.8 13.2 32 14.5 45.2 2.8 40.9-36.1 93.5-56 148.1-56s107.3 19.88 148.1 56c6.1 5.4 13.7 8 21.2 8a31.99 31.99 0 0 0 24-10.81c11.7-13.29 10.5-33.49-2.8-45.19-52.6-46.4-120.2-72-190.5-72z" />
  </svg>
);

const SvgWifiFairSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgWifiFairSolid;
