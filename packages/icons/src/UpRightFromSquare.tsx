import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M400 320c-8.836 0-16 7.164-16 16v112c0 17.67-14.33 32-32 32H64c-17.67 0-32-14.33-32-32V160c0-17.67 14.33-32 32-32h112c8.8 0 16-7.2 16-16s-7.2-16-16-16H64c-35.35 0-64 28.65-64 64v288c0 35.35 28.65 64 64 64h288c35.35 0 64-28.65 64-64V336c0-8.8-7.2-16-16-16zM480 0H368.9c-13 0-24.59 7.766-29.56 19.77s-2.25 25.69 6.938 34.86l44.67 44.67-209.4 209.4c-6.25 6.25-6.25 16.38 0 22.62C183.8 334.4 187.9 336 192 336s8.188-1.562 11.31-4.688l209.4-209.4 44.68 44.68c6.156 6.125 14.28 9.375 22.59 9.375 4.125 0 8.312-.813 12.28-2.453C504.3 168.5 512 156.1 512 143.1V32c0-17.64-14.3-32-32-32zm0 143.1L368 32s-.094 0 0 0h112v111.1z" />
  </svg>
);

const SvgUpRightFromSquare = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgUpRightFromSquare;
