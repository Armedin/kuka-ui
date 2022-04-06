import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M400 32h-96c-8.8 0-16 7.18-16 16s7.2 16 16 16h96c8.8 0 16 7.18 16 16v352c0 8.822-7.178 16-16 16h-96c-8.822 0-16 7.178-16 16s7.178 16 16 16h96c26.47 0 48-21.53 48-48V80c0-26.47-21.5-48-48-48zM48 64h96c8.8 0 16-7.18 16-16s-7.2-16-16-16H48C21.53 32 0 53.53 0 80v352c0 26.5 21.53 48 48 48h96c8.8 0 16-7.2 16-16s-7.2-16-16-16H48c-8.82 0-16-7.2-16-16V80c0-8.82 7.18-16 16-16z" />
  </svg>
);

const SvgBracketsSquare = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgBracketsSquare;
