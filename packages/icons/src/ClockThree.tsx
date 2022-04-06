import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M240 112c0-8.8 7.2-16 16-16s16 7.2 16 16v128h96c8.8 0 16 7.2 16 16s-7.2 16-16 16H256c-8.8 0-16-7.2-16-16V112zM256 0c141.4 0 256 114.6 256 256S397.4 512 256 512 0 397.4 0 256 114.6 0 256 0zM32 256c0 123.7 100.3 224 224 224s224-100.3 224-224S379.7 32 256 32 32 132.3 32 256z" />
  </svg>
);

const SvgClockThree = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgClockThree;
