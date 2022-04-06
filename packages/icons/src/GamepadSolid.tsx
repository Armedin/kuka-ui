import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M448 64H192C85.96 64 0 149.1 0 256s85.96 192 192 192h256c106 0 192-85.96 192-192S554 64 448 64zM247.1 280h-32v32c0 13.2-10.78 24-23.98 24-13.2 0-24.02-10.8-24.02-24v-32l-31.1-.9c-13.2 0-24.9-9.9-24.9-23.1 0-13.2 10.85-24.01 24.05-24.01l31.95.01v-32c0-13.2 10.82-24 24.02-24s23.98 10.8 23.98 24v32h32c13.2 0 24.02 10.8 24.02 24-.02 13.2-9.92 24-24.02 24zm184 64c-22.12 0-39.1-17.87-39.1-39.1s17.87-40 39.1-40 39.1 17.88 39.1 40-16.1 39.1-39.1 39.1zm64-96c-22.12 0-39.1-17.87-39.1-39.1s17.87-40 39.1-40c22.12 0 39.1 17.88 39.1 40S518.1 248 495.1 248z" />
  </svg>
);

const SvgGamepadSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgGamepadSolid;
