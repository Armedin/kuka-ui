import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M186 120.5c23-35.12 59.4-60.66 102-69.3V32c0-17.67 14.3-32 32-32s32 14.33 32 32v19.2c73 14.83 128 79.4 128 156.8v18.8c0 47.1 17.3 92.4 48.5 127.6l7.4 8.3c8.4 9.5 10.5 22.9 5.3 34.4-1.1.4-.4 0-.6 1.3l90.2 70.7c10.4 8.2 12.3 23.3 4.1 33.7-8.2 10.4-23.3 12.3-33.7 4.1L9.196 42.89C-1.236 34.71-3.065 19.63 5.112 9.196 13.29-1.236 28.37-3.065 38.81 5.112L186 120.5zm-26 106.3v-4.7L406.2 416H128c-12.6 0-24.9-7.4-29.19-18.9-5.16-11.5-3.1-24.9 5.29-34.4l7.4-8.3c31.2-35.2 48.5-80.5 48.5-127.6zM320 512c-17 0-33.3-6.7-45.3-18.7S256 464.1 256 448h128c0 16.1-6.7 33.3-18.7 45.3S336.1 512 320 512z" />
  </svg>
);

const SvgBellSlashSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgBellSlashSolid;
