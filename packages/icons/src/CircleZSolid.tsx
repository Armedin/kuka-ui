import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm72 384H184a23.958 23.958 0 0 1-21.25-12.86 23.945 23.945 0 0 1 1.531-24.8L282.2 176H184c-13.2 0-24-10.7-24-24s10.8-24 24-24h144c8.938 0 17.12 4.953 21.25 12.86a23.945 23.945 0 0 1-1.531 24.8L229.8 336H328c13.25 0 24 10.75 24 24s-10.7 24-24 24z" />
  </svg>
);

const SvgCircleZSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCircleZSolid;
