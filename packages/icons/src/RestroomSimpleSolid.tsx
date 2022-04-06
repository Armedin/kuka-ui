import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M264 0h-16c-8.75 0-16 7.25-16 16v480c0 8.75 7.25 16 16 16h16c8.75 0 16-7.25 16-16V16c0-8.75-7.2-16-16-16zm184 128c35.38 0 64-28.62 64-64S483.38 0 448 0s-64 28.62-64 64 28.6 64 64 64zm127.4 235.6-48.3-168.8c-5.8-20.6-24.7-34.8-47-34.8h-65.99c-21.43 0-40.27 14.21-46.15 34.81l-48.23 168.8C317.7 373.8 325.4 384 336 384h48v96c0 17.67 14.33 32 32 32h64c17.67 0 32-14.33 32-32v-96h47.99c10.61 0 18.31-10.2 15.41-20.4zM96 128c35.38 0 64-28.62 64-64S131.4 0 96 0 32 28.62 32 64s28.63 64 64 64zm32 32H64c-35.35 0-64 28.7-64 64v96c0 17.67 14.33 32 32 32v128c0 17.67 14.33 32 32 32h64c17.67 0 32-14.33 32-32V352c17.67 0 32-14.33 32-32v-96c0-35.3-28.7-64-64-64z" />
  </svg>
);

const SvgRestroomSimpleSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgRestroomSimpleSolid;
