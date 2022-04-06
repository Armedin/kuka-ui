import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M512 0c35.3 0 64 28.65 64 64v224c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64V64C0 28.65 28.65 0 64 0h448zm0 64H64v224h448V64zM0 448c0-17.7 14.33-32 32-32h32c17.67 0 32 14.3 32 32v32c0 17.7-14.33 32-32 32H32c-17.67 0-32-14.3-32-32v-32zm224-32c17.7 0 32 14.3 32 32v32c0 17.7-14.3 32-32 32h-32c-17.7 0-32-14.3-32-32v-32c0-17.7 14.3-32 32-32h32zm96 32c0-17.7 14.3-32 32-32h32c17.7 0 32 14.3 32 32v32c0 17.7-14.3 32-32 32h-32c-17.7 0-32-14.3-32-32v-32zm224-32c17.7 0 32 14.3 32 32v32c0 17.7-14.3 32-32 32h-32c-17.7 0-32-14.3-32-32v-32c0-17.7 14.3-32 32-32h32z" />
  </svg>
);

const SvgGalleryThumbnailsSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgGalleryThumbnailsSolid;
