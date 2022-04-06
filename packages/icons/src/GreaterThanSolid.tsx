import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M32.03 448c-11.75 0-23.05-6.469-28.66-17.69-7.906-15.81-1.5-35.03 14.31-42.94l262.8-131.4L17.69 124.6C1.875 116.7-4.531 97.51 3.375 81.7c7.891-15.81 27.06-22.19 42.94-14.31l320 160C377.2 232.8 384 243.9 384 256c0 12.12-6.844 23.19-17.69 28.63l-320 160c-4.59 2.27-9.48 3.37-14.28 3.37z" />
  </svg>
);

const SvgGreaterThanSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgGreaterThanSolid;
