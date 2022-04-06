import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M640 256c0 8.8-7.2 16-16 16H512c-8.822 0-16 7.178-16 16v128c0 26.47-21.53 48-48 48h-96c-26.47 0-48-21.53-48-48V96c0-8.822-7.178-16-16-16h-96c-8.8 0-16 7.18-16 16v128c0 26.47-21.53 48-48 48H16c-8.822 0-16-7.2-16-16s7.178-16 16-16h112c8.822 0 16-7.178 16-16V96c0-26.47 21.53-48 48-48h96c26.47 0 48 21.53 48 48v320c0 8.822 7.178 16 16 16h96c8.822 0 16-7.178 16-16V288c0-26.47 21.53-48 48-48h112c8.8 0 16 7.2 16 16z" />
  </svg>
);

const SvgWaveSquare = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgWaveSquare;
