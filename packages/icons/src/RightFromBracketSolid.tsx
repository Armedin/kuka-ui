import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M96 480h64c17.7 0 32-14.3 32-32s-14.3-32-32-32H96c-17.67 0-32-14.33-32-32V128c0-17.67 14.33-32 32-32h64c17.7 0 32-14.33 32-32s-14.3-32-32-32H96C42.98 32 0 74.98 0 128v256c0 53 42.98 96 96 96zm408.8-241.5-144.1-136a24.064 24.064 0 0 0-26-4.594 24.025 24.025 0 0 0-14.51 22.05l-.092 72-128-.001c-17.69 0-32.02 14.33-32.02 32v64c0 17.67 14.34 32 32.02 32l128 .001.092 71.1a24.03 24.03 0 0 0 14.51 22.05c8.803 3.781 19.03 1.984 26-4.594l144.1-136c9.6-8.112 9.6-24.912 0-34.012z" />
  </svg>
);

const SvgRightFromBracketSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgRightFromBracketSolid;
