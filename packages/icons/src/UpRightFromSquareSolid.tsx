import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M384 320c-17.67 0-32 14.33-32 32v96H64V160h96c17.67 0 32-14.32 32-32s-14.33-32-32-32H64c-35.35 0-64 28.65-64 64v288c0 35.34 28.65 64 64 64h288c35.35 0 64-28.66 64-64v-96c0-17.7-14.3-32-32-32zM488 0H352c-12.94 0-24.62 7.797-29.56 19.75-4.969 11.97-2.219 25.72 6.938 34.88L370.8 96 169.4 297.4c-12.5 12.5-12.5 32.75 0 45.25 6.2 6.25 14.4 9.35 22.6 9.35s16.38-3.125 22.62-9.375L416 141.3l41.38 41.38c9.156 9.141 22.88 11.84 34.88 6.938C504.2 184.6 512 172.9 512 160V24c0-13.26-10.7-24-24-24z" />
  </svg>
);

const SvgUpRightFromSquareSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgUpRightFromSquareSolid;
