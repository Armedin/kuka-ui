import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M96 32H64c-17.67 0-32 14.33-32 32v32H0V64C0 28.65 28.65 0 64 0h32v32zm32-32h96v32h-96V0zM0 128h32v96H0v-96zm288-96h-32V0h32c35.3 0 64 28.65 64 64v64h-32V64c0-17.67-14.3-32-32-32zm64 128v128c0 35.3-28.7 64-64 64H160V224c0-35.3 28.7-64 64-64h128zm-160 64v96h96c17.7 0 32-14.3 32-32v-96h-96c-17.7 0-32 14.3-32 32zm0 160v64c0 17.7 14.3 32 32 32h32v32h-32c-35.3 0-64-28.7-64-64v-64h32zM64 352c-35.35 0-64-28.7-64-64v-32h32v32c0 17.7 14.33 32 32 32h64v32H64zm320-192h64c35.3 0 64 28.7 64 64v32h-32v-32c0-17.7-14.3-32-32-32h-64v-32zm-96 320h96v32h-96v-32zm160 32h-32v-32h32c17.7 0 32-14.3 32-32v-32h32v32c0 35.3-28.7 64-64 64zm64-128h-32v-96h32v96z" />
  </svg>
);

const SvgObjectIntersect = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgObjectIntersect;
