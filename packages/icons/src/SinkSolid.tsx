import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M496 288h-96v-32h64c8.838 0 16-7.164 16-15.1v-15.1c0-8.838-7.162-16-16-16l-80-1.8c-17.67 0-32 14.33-32 32v47.1h-64v-192c0-17.64 14.36-32 32-32s32 14.36 32 32v16c0 8.837 7.164 16 16 16h32c8.838 0 16-7.163 16-16v-16c0-59.2-53.85-106-115.1-94.14-45.6 9.75-76.9 52.4-76.9 98.83v188.2l-64 .01v-48c0-17.67-14.33-32-32-32H48c-8.836 0-16 7.162-16 16v15.1c0 9.7 7.16 16.9 16 16.9h64v32H16c-8.836 0-16 7.164-16 16v32c0 8.836 7.164 16 16 16h480c8.836 0 16-7.164 16-16v-32c0-8.8-7.2-16-16-16zM32 416c0 53.02 42.98 96 96 96h256c53.02 0 96-42.98 96-96v-32H32v32z" />
  </svg>
);

const SvgSinkSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgSinkSolid;
