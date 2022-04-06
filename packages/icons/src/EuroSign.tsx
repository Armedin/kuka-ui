import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M48 224c-8.84 0-16-7.2-16-16s7.16-16 16-16h25.28C100.8 99.47 186.5 32 288 32h48.1c9.7 0 16 7.16 16 16s-6.3 16-16 16H288c-83.6 0-154.7 53.4-181.1 128H304c8.8 0 16 7.2 16 16s-7.2 16-16 16H98.65C96.91 234.4 96 245.1 96 256c0 10.9.91 21.6 2.65 32H304c8.8 0 16 7.2 16 16s-7.2 16-16 16H106.9c26.4 74.6 97.5 128 181.1 128h48.1c9.7 0 16 7.2 16 16s-6.3 16-16 16H288c-101.5 0-187.2-67.5-214.72-160H48c-8.84 0-16-7.2-16-16s7.16-16 16-16h18.27c-1.5-10.5-2.27-21.1-2.27-32 0-10.9.77-21.5 2.27-32H48z" />
  </svg>
);

const SvgEuroSign = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgEuroSign;
