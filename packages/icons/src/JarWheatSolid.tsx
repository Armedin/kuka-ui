import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" {...props}>
    <path d="M32 32C32 14.33 46.33 0 64 0h192c17.7 0 32 14.33 32 32s-14.3 32-32 32H64c-17.67 0-32-14.33-32-32zM0 160c0-35.3 28.65-64 64-64h192c35.3 0 64 28.7 64 64v288c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64V160zm192 160c35.3 0 64-28.7 64-64h-48c-19.1 0-36.3 8.4-48 21.7-11.7-13.3-28.9-21.7-48-21.7H64c0 35.3 28.65 64 64 64h64zm0-96c35.3 0 64-28.7 64-64h-48c-19.1 0-36.3 8.4-48 21.7-11.7-13.3-28.9-21.7-48-21.7H64c0 35.3 28.65 64 64 64h64zm0 192c35.3 0 64-28.7 64-64h-48c-19.1 0-36.3 8.4-48 21.7-11.7-13.3-28.9-21.7-48-21.7H64c0 35.3 28.65 64 64 64h16v32c0 8.8 7.2 16 16 16s16-7.2 16-16v-32h16z" />
  </svg>
);

const SvgJarWheatSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgJarWheatSolid;
