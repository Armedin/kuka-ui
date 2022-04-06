import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M509.2 275c-21-47.13-48.5-151.8-73.12-186.8C397.1 32.88 333.7 0 266.1 0H192C86 0 0 86 0 192c0 54.5 23.25 106.5 64 142.9V512h256l-.005-64h63.99c35.38 0 63.1-28.62 63.1-63.1V320h31.1c10.88 0 20.89-5.5 26.77-14.62C512.8 296.4 513.6 284.9 509.2 275zM336 218c0 8.836-7.164 16-16 16h-54v54c0 8.836-7.164 16-16 16h-52c-8.8 0-16-7.2-16-16v-54h-54c-8.836 0-16-7.164-16-16v-52c0-8.836 7.164-16 16-16h54V96c0-8.836 7.165-16 16-16h52c8.836 0 16 7.164 16 16v54h54c8.836 0 16 7.164 16 16v52z" />
  </svg>
);

const SvgHeadSideMedicalSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgHeadSideMedicalSolid;
