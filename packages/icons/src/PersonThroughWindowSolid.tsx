import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M191.1 128c0 26.5-20.6 48-48 48-25.6 0-48-21.5-48-48s22.4-48 48-48c27.4 0 48 21.5 48 48zM385 336h-74.5l84.1 126.2c9.8 13.9 5.9 34.6-8.8 44.4-14.8 9.8-34.6 5.9-44.4-8.8L308.2 448H48c-26.51 0-48-21.5-48-48V48C0 21.49 21.49 0 48 0h544c26.5 0 48 21.49 48 48v352c0 26.5-21.5 48-48 48H421.9l-42.7-64H425l-40-48zM63.1 64v320h64v-73.8c0-65.2 40.5-123.7 101-147.9 36.2-14.5 59-49.5 59-88.46V64h-224zM352 64v9.84c0 54.66-27.9 104.66-72.5 133.56l.9 1.5 41 62.2h71.1c14.3 0 27.8 7.2 36.9 18.2l78.9 94.7H576V64H352zm-86.5 320-68.8-103.3c-3.1 9.3-5.6 18.4-5.6 29.5v72.9s0 .9 0 0l74.4.9z" />
  </svg>
);

const SvgPersonThroughWindowSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgPersonThroughWindowSolid;
