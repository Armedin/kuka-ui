import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M448 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h384c35.35 0 64-28.65 64-64V96c0-35.35-28.7-64-64-64zm32 384c0 17.64-14.36 32-32 32H64c-17.64 0-32-14.36-32-32v-96c0-17.64 14.36-32 32-32h384c17.6 0 32 14.4 32 32v96zm0-151.1c-9.4-5.5-20.3-8.9-32-8.9H64c-11.72 0-22.55 3.4-32 8.9V96c0-17.64 14.36-32 32-32h384c17.64 0 32 14.36 32 32v168.9zM320 344c-13.25 0-24 10.74-24 24 0 13.25 10.75 24 24 24 13.26 0 24-10.75 24-24 0-13.3-10.7-24-24-24zm96 0c-13.25 0-24 10.74-24 24 0 13.25 10.75 24 24 24 13.26 0 24-10.75 24-24 0-13.3-10.7-24-24-24z" />
  </svg>
);

const SvgHardDrive = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgHardDrive;
