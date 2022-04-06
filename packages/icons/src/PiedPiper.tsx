import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 512" {...props}>
    <path
      d="M455.93 23.2c-26.7 6.8-68.14 28.49-114.58 67.46A206 206 0 0 0 240 64C125.13 64 32 157.12 32 272s93.13 208 208 208 208-93.13 208-208a207.25 207.25 0 0 0-58.75-144.81 155.35 155.35 0 0 0-17 27.4A176.16 176.16 0 0 1 417.1 272c0 97.66-79.44 177.11-177.09 177.11a175.81 175.81 0 0 1-87.63-23.4c82.94-107.33 150.79-37.77 184.31-226.65 5.79-32.62 28-94.26 126.23-160.18 8.08-5.43 2.43-18.08-6.99-15.68ZM125 406.4A176.66 176.66 0 0 1 62.9 272c0-97.66 79.45-177.1 177.1-177.1a174 174 0 0 1 76.63 17.75C250.64 174.76 189.77 265.52 125 406.4Z"
      className="pied-piper_svg__cls-1"
    />
  </svg>
);

const SvgPiedPiper = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgPiedPiper;