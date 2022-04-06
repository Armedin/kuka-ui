import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M304 144c0-26.5-21.5-48-48-48s-48 21.5-48 48c0 11.53 4.25 21.97 11.04 30.26C207.5 184.5 200 199.3 200 216c0 30.9 25.1 56 56 56s56-25.12 56-56c0-16.66-7.459-31.48-19.04-41.74C299.8 165.1 304 155.5 304 144zm-48-16c8.828 0 16 7.188 16 16s-7.2 16-16 16-16-7.2-16-16 7.2-16 16-16zm0 112c-13.23 0-24-10.78-24-24s10.8-24 24-24 24 10.78 24 24-10.8 24-24 24zm0-240C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm0 320c-70.69 0-128-57.31-128-128S185.31 64 256 64s128 57.31 128 128c0 70.7-57.3 128-128 128z" />
  </svg>
);

const SvgPool8BallSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgPool8BallSolid;
