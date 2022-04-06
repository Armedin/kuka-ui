import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M544 64H32C14.38 64 0 78.38 0 96v320c0 17.62 14.38 32 32 32h512c17.62 0 32-14.38 32-32V96c0-17.62-14.4-32-32-32zM144 384H64V224h64v80c0 8.9 7.1 16 16 16v64zm128 0h-96v-64c8.9 0 16-7.1 16-16v-80h64v80c0 8.9 7.1 16 16 16v64zm128 0h-96v-64c8.875 0 16-7.125 16-16v-80h64v80c0 8.875 7.125 16 16 16v64zm112 0h-80v-64c8.875 0 16-7.125 16-16v-80h64v160z" />
  </svg>
);

const SvgPianoKeyboardSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgPianoKeyboardSolid;
