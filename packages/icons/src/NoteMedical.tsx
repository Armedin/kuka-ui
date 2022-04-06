import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M384 32H64.01C28.66 32 .006 60.65.006 96L0 416c0 35.35 28.65 64 64 64h229.5c16.97 0 33.25-6.742 45.26-18.75l90.51-90.51A63.855 63.855 0 0 0 448 325.5V96c0-35.35-28.7-64-64-64zm-64 402.7V368c0-8.828 7.188-16 16-16h66.75L320 434.7zM416 320h-80c-26.47 0-48 21.53-48 48v80H64c-17.64 0-32-14.36-32-32V96c0-17.64 14.36-32 32-32h320c17.64 0 32 14.36 32 32v224zM304 192h-48v-48c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48h-48c-8.8 0-16 7.2-16 15.1V240c0 8.836 7.164 15.1 16 15.1h48v48c0 9.7 7.2 16.9 16 16.9h32c8.836 0 16-7.166 16-16v-48.9l48-.001c8.836 0 16-7.162 16-15.1V207.1c0-7.9-7.2-15.1-16-15.1z" />
  </svg>
);

const SvgNoteMedical = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgNoteMedical;
