import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M352 240H54.63l116.7-116.7c6.25-6.25 6.25-16.38 0-22.62s-16.38-6.25-22.62 0l-144 144C1.563 247.8 0 251.9 0 256s1.562 8.188 4.688 11.31l144 144c6.25 6.25 16.38 6.25 22.62 0s6.25-16.38 0-22.62L54.63 272H352c8.844 0 16-7.156 16-16s-7.2-16-16-16zm80-176c-8.8 0-16 7.16-16 16v352c0 8.844 7.156 16 16 16s16-7.156 16-16V80c0-8.84-7.2-16-16-16z" />
  </svg>
);

const SvgArrowLeftFromLine = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgArrowLeftFromLine;
