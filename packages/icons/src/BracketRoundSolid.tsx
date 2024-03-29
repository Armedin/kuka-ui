import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512" {...props}>
    <path d="M127.9 480c-6.062 0-12.22-1.75-17.66-5.375-4.5-2.1-110.2-75.16-110.2-218.6s105.7-215.6 110.2-218.6c14.72-9.812 34.56-5.844 44.37 8.875 9.781 14.66 5.844 34.47-8.75 44.28C142.4 92.95 63.1 147.8 63.1 256c0 108.4 78.53 163.2 81.87 165.5 14.56 9.906 18.44 29.78 8.594 44.37C148.3 475 138.2 480 127.9 480z" />
  </svg>
);

const SvgBracketRoundSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgBracketRoundSolid;
