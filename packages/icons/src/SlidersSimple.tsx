import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M496 352c8.8 0 16 7.2 16 16s-7.2 16-16 16H158.4c-8.3 36.5-39.7 64-78.4 64-44.18 0-80-35.8-80-80s35.82-80 80-80c38.7 0 70.1 27.5 78.4 64H496zM32 368c0 26.5 21.49 48 48 48 26.5 0 48-21.5 48-48s-21.5-48-48-48c-26.51 0-48 21.5-48 48zm321.6-240c7.4-36.52 39.7-64 78.4-64 44.2 0 80 35.82 80 80 0 44.2-35.8 80-80 80-38.7 0-71-27.5-78.4-64H16c-8.836 0-16-7.2-16-16s7.164-16 16-16h337.6zm78.4 64c26.5 0 48-21.5 48-48s-21.5-48-48-48-48 21.5-48 48 21.5 48 48 48z" />
  </svg>
);

const SvgSlidersSimple = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgSlidersSimple;
