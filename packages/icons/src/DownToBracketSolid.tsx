import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M206.5 344.7 70.55 200.6c-6.58-6.9-8.38-17.2-4.6-26 3.8-8.8 12.47-14.5 22.05-14.5h72V32.02C160 14.33 174.3 0 192 0h64c17.7 0 32 14.33 32 32.02V160.1h72c9.6 0 18.2 5.7 22 14.5 3.8 8.8 2 19.1-4.5 26l-136 144.1c-9.1 9.6-25.9 9.6-35 0zM352 512H96c-53.02 0-96-43-96-96v-64c0-17.7 14.33-32.9 32-32.9s32 15.2 32 32.9v64c0 17.7 14.33 32 32 32h256c17.7 0 32-14.3 32-32v-64c0-17.7 14.3-32.9 32-32.9s32 15.2 32 32.9v64c0 53-43 96-96 96z" />
  </svg>
);

const SvgDownToBracketSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgDownToBracketSolid;
