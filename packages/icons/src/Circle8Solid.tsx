import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M248 224h16c13.2 0 24-10.8 24-24s-10.8-24-24-24h-16c-13.2 0-24 10.8-24 24s10.8 24 24 24zm24 48h-32c-17.66 0-32 14.34-32 32s14.34 32 32 32h32c17.66 0 32-14.34 32-32s-14.3-32-32-32zM256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm16 384h-32c-44.1 0-80-35.9-80-80 0-25.06 11.81-47.19 29.9-61.87C181.3 230.3 176 215.8 176 200c0-39.7 32.3-72 72-72h16c39.69 0 72 32.31 72 72 0 15.77-5.254 30.26-13.9 42.13C340.2 256.8 352 278.9 352 304c0 44.1-35.9 80-80 80z" />
  </svg>
);

const SvgCircle8Solid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCircle8Solid;
