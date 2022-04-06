import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512" {...props}>
    <path d="M160 80v352c0 8.822-7.178 16-16 16H48c-8.82 0-16 7.2-16 16s7.18 16 16 16h96c26.47 0 48-21.53 48-48V80c0-26.47-21.5-48-48-48H48c-8.82 0-16 7.18-16 16s7.18 16 16 16h96c8.8 0 16 7.18 16 16z" />
  </svg>
);

const SvgBracketSquareRight = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgBracketSquareRight;
