import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M432 32H208c-26.5 0-48 21.49-48 48v16h-32V80c0-44.18 35.8-80 80-80h224c44.2 0 80 35.82 80 80v224c0 44.2-35.8 80-80 80h-16v-32h16c26.5 0 48-21.5 48-48V80c0-26.51-21.5-48-48-48zm-112 96c35.3 0 64 28.7 64 64v256c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64V192c0-35.3 28.65-64 64-64h256zm0 32H64c-17.67 0-32 14.3-32 32v64h320v-64c0-17.7-14.3-32-32-32zM64 480h256c17.7 0 32-14.3 32-32V288H32v160c0 17.7 14.33 32 32 32z" />
  </svg>
);

const SvgWindowRestore = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgWindowRestore;
