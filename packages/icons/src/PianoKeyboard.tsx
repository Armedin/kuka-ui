import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M512 64H64C28.8 64 0 92.8 0 128v256c0 35.2 28.8 64 64 64h448c35.2 0 64-28.8 64-64V128c0-35.2-28.8-64-64-64zM128 416H64c-17.67 0-32-14.33-32-32V224h64v96c0 8.875 7.125 16 16 16h16v80zm144 0H160v-80h16c8.9 0 16-7.1 16-16v-96h48v96c0 8.875 7.125 16 16 16h16v80zM128 304v-80h32v80h-32zm288 112H304v-80h16c8.875 0 16-7.125 16-16v-96h48v96c0 8.875 7.125 16 16 16h16v80zM272 304v-80h32v80h-32zm272 80c0 17.67-14.33 32-32 32h-64v-80h16c8.875 0 16-7.125 16-16v-96h64v160zm-128-80v-80h32v80h-32zm128-112H32v-64c0-17.67 14.33-32 32-32h448c17.67 0 32 14.33 32 32v64z" />
  </svg>
);

const SvgPianoKeyboard = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgPianoKeyboard;
