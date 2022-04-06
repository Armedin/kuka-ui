import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M32 64v32H0V64C0 28.65 28.65 0 64 0h32v32H64c-17.67 0-32 14.33-32 32zm192-32h-96V0h96v32zM32 224H0v-96h32v96zm0 32v32c0 17.7 14.33 32 32 32h32v32H64c-35.35 0-64-28.7-64-64v-32h32zm96 96v-32h96v32h-96zm64 32v64c0 17.7 14.3 32 32 32h224c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32h-64v-32h64c35.3 0 64 28.7 64 64v224c0 35.3-28.7 64-64 64H224c-35.3 0-64-28.7-64-64v-64h32zm160-160h-32v-96h32v96zm0-160v32h-32V64c0-17.67-14.3-32-32-32h-32V0h32c35.3 0 64 28.65 64 64zm-96 256h32c17.7 0 32-14.3 32-32v-32h32v32c0 35.3-28.7 64-64 64h-32v-32z" />
  </svg>
);

const SvgObjectSubtract = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgObjectSubtract;
