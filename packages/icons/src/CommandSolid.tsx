import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M352 288h-32v-64h32c52.94 0 96-43.06 96-96s-43.06-96-96-96-96 43.06-96 96v32h-64v-32c0-52.94-43.06-96-96-96S0 75.06 0 128s43.06 96 96 96h32v64H96c-52.94 0-96 43.06-96 96s43.06 96 96 96 96-43.06 96-96v-32h64v32c0 52.94 43.06 96 96 96s96-43.06 96-96-43.1-96-96-96zm-32-160c0-17.66 14.34-32 32-32s32 14.34 32 32-14.34 32-32 32h-32v-32zM128 384c0 17.66-14.34 32-32 32s-32-14.34-32-32 14.34-32 32-32h32v32zm0-224H96c-17.66 0-32-14.3-32-32s14.34-32 32-32 32 14.34 32 32v32zm128 128h-64v-64h64v64zm96 128c-17.66 0-32-14.34-32-32v-32h32c17.66 0 32 14.34 32 32s-14.3 32-32 32z" />
  </svg>
);

const SvgCommandSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCommandSolid;
