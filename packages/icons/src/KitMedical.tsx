import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M512 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h448c35.35 0 64-28.65 64-64V96c0-35.35-28.7-64-64-64zM96 448H64c-17.64 0-32-14.36-32-32V96c0-17.64 14.36-32 32-32h32v384zm352 0H128V64h320v384zm96-32c0 17.64-14.36 32-32 32h-32V64h32c17.64 0 32 14.36 32 32v320zM208 288h48v48c0 8.8 7.2 16 16 16h32c8.836 0 16-7.164 16-16v-48h48c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16h-48v-48c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48h-48c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16z" />
  </svg>
);

const SvgKitMedical = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgKitMedical;
