import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" {...props}>
    <path d="M104 512c-48.53 0-88-39.46-88-87.1v-8c0-17.69 14.33-32 32-32s32 14.31 32 32v8c0 13.22 10.77 24 24 24s24-10.78 24-24v-336c0-48.53 39.47-88 88-88s88 39.47 88 88v8c0 17.69-14.33 32-32 32s-32-14.31-32-32v-8c0-13.22-10.77-24-24-24s-24 10.78-24 24v336c0 47.6-39.5 87.1-88 87.1z" />
  </svg>
);

const SvgIntegralSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgIntegralSolid;
