import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M256-.002c-141.4 0-256 114.6-256 256C0 397.4 114.6 512 256 512s256-114.6 256-256S397.4-.002 256-.002zM256 32c56.1 0 107.4 20.62 146.7 54.7L256 233.4 109.3 86.7C148.6 52.62 199.9 32 256 32zM32 255.1c0-56.1 20.62-107.4 54.7-146.7L233.4 256 86.7 402.7C52.62 363.4 32 312.1 32 255.1zM256 480c-56.1 0-107.4-20.62-146.7-54.7L256 278.6l146.7 146.7C363.4 459.4 312.1 480 256 480zm169.3-77.3L278.6 256l146.7-146.7C459.38 148.6 480 199.88 480 256c0 56.1-20.6 107.4-54.7 146.7z" />
  </svg>
);

const SvgCircleQuarters = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCircleQuarters;
