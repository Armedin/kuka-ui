import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" {...props}>
    <path d="M159.1 198.3 261.4 46.25c9.8-14.71 29.6-18.68 44.4-8.88 14.7 9.81 18.6 29.67 8.8 44.38L219.8 223.1H272c17.7 0 32 15.2 32 32 0 18.6-14.3 32-32 32h-80v32h80c17.7 0 32 15.2 32 32.9s-14.3 32-32 32h-80v64c0 17.7-14.3 32-32.9 32-16.8 0-32-14.3-32-32v-64h-80c-16.77 0-32-14.3-32-32s15.23-32.9 32-32.9h80v-32h-80c-16.77 0-32-13.4-32-32 0-16.8 15.23-32 32-32h53.1L5.374 81.75c-9.803-14.71-5.83-34.57 8.876-44.38 14.7-9.8 34.57-5.83 44.37 8.88L159.1 198.3z" />
  </svg>
);

const SvgYenSignSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgYenSignSolid;
