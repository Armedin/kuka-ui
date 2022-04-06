import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M32 64v224c0 17.7 14.33 32 32 32h64v32H64c-35.35 0-64-28.7-64-64V64C0 28.65 28.65 0 64 0h224c35.3 0 64 28.65 64 64v64h-32V64c0-17.67-14.3-32-32-32H64c-17.67 0-32 14.33-32 32zm160 320v64c0 17.7 14.3 32 32 32h224c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32h-64v-32h64c35.3 0 64 28.7 64 64v224c0 35.3-28.7 64-64 64H224c-35.3 0-64-28.7-64-64v-64h32zm64-32v-32h32c17.7 0 32-14.3 32-32h32c0 35.3-28.7 64-64 64h-32zm96-96h-32v-64h-32v-32h64v96zm-192 96v-96h32v64h32v32h-64zm64-192h32v32h-32c-17.7 0-32 14.3-32 32h-32c0-35.3 28.7-64 64-64z" />
  </svg>
);

const SvgObjectExclude = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgObjectExclude;
