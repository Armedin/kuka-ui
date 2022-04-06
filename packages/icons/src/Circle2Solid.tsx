import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm72 384H184a23.98 23.98 0 0 1-22.39-15.38c-3.578-9.25-1.078-19.75 6.266-26.41l108.4-98.31c7.047-6.938 11.31-17 11.31-27.66s-4.266-20.72-12-28.31C259.4 172 232.9 172 216.6 187.9l-11 10.8c-9.5 9.4-25.5 9.2-33.9-.3-9.3-9.5-9.2-24.7.3-33.9l11-10.78c34.8-34.19 91.45-34.19 126.3 0 17 16.69 26.38 38.91 26.38 62.56s-9.375 45.88-26.38 62.56L246.2 336H328c13.25 0 24 10.75 24 24s-10.7 24-24 24z" />
  </svg>
);

const SvgCircle2Solid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCircle2Solid;
