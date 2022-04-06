import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M448 309.5V96c0-35.35-28.65-64-64-64H64.01C28.66 32 .006 60.65.006 96L0 416c0 35.35 28.65 64 64 64h213.5c16.97 0 33.25-6.742 45.26-18.75l106.5-106.5C441.3 342.7 448 326.5 448 309.5zM300.1 438.6c-3.4 3.5-7.6 5.8-12.1 7.3V336c0-8.828 7.188-16 16-16h109.9c-1.566 4.477-3.844 8.668-7.297 12.12L300.1 438.6zM416 288H304c-26.5 0-48 21.5-48 48v112H64c-17.64 0-32-14.36-32-32V96c0-17.64 14.36-32 32-32h320c17.64 0 32 14.36 32 32v192z" />
  </svg>
);

const SvgNote = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgNote;
