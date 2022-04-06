import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M238.1 161.3 197.8 20.4C194.9 10.17 202.6 0 213.2 0h56.2c11.5 0 22.1 6.153 27.8 16.12L397.7 192h116.6c34.2 0 93.7 29 93.7 64 0 36-59.5 64-93.7 64h-73.7l190.2 149.1c10.4 8.2 12.3 23.3 4.1 33.7-8.2 10.4-23.3 12.3-33.7 4.1L9.196 42.89C-1.236 34.71-3.065 19.63 5.112 9.196 13.29-1.237 28.37-3.065 38.81 5.112L238.1 161.3zM41.54 128.7 362.5 381.6l-65.3 114.3c-5.7 9.9-16.3 16.1-27.8 16.1h-56.2c-10.6 0-18.3-10.2-15.4-20.4l49.1-172.5H144l-43.2 58.5c-3.02 4-7.76 6.4-12.8 6.4H46.03C38.28 384 32 377.7 32 369.1c0-.4.18-1.7.54-3L64 255.1 32.54 145.9c-.36-1.3-.54-2.6-.54-3.9 0-6.1 3.1-11.4 9.54-13.3z" />
  </svg>
);

const SvgPlaneSlashSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgPlaneSlashSolid;
