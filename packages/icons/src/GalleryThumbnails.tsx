import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M512 0c35.3 0 64 28.65 64 64v224c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64V64C0 28.65 28.65 0 64 0h448zm0 32H64c-17.67 0-32 14.33-32 32v224c0 17.7 14.33 32 32 32h448c17.7 0 32-14.3 32-32V64c0-17.67-14.3-32-32-32zM64 416c17.67 0 32 14.3 32 32v32c0 17.7-14.33 32-32 32H32c-17.67 0-32-14.3-32-32v-32c0-17.7 14.33-32 32-32h32zm0 32H32v32h32v-32zm96 0c0-17.7 14.3-32 32-32h32c17.7 0 32 14.3 32 32v32c0 17.7-14.3 32-32 32h-32c-17.7 0-32-14.3-32-32v-32zm32 32h32v-32h-32v32zm192-64c17.7 0 32 14.3 32 32v32c0 17.7-14.3 32-32 32h-32c-17.7 0-32-14.3-32-32v-32c0-17.7 14.3-32 32-32h32zm0 32h-32v32h32v-32zm96 0c0-17.7 14.3-32 32-32h32c17.7 0 32 14.3 32 32v32c0 17.7-14.3 32-32 32h-32c-17.7 0-32-14.3-32-32v-32zm32 32h32v-32h-32v32z" />
  </svg>
);

const SvgGalleryThumbnails = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgGalleryThumbnails;
