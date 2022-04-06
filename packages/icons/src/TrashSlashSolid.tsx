import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M98.4 51.82C103.2 40.19 114.6 32 127.1 32h96l8.1-14.31C236.6 6.849 247.7 0 259.8 0h120.4c12.1 0 23.2 6.848 28.6 17.69L416 32h96c17.7 0 32 14.33 32 32s-14.3 32-32 32H154.8l40.8 32H512l-14.8 236.4 133.6 104.7c10.4 8.2 12.3 23.3 4.1 33.7-8.2 10.4-23.3 12.3-33.7 4.1L9.196 42.89C-1.236 34.71-3.065 19.63 5.112 9.196 13.29-1.236 28.37-3.065 38.81 5.112L98.4 51.82zm50.8 414.28-16.7-265.7 354.6 280.1c-5.9 17.6-23.6 31.5-44.2 31.5H197.1c-25.4 0-46.3-19.7-47.9-45.9z" />
  </svg>
);

const SvgTrashSlashSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgTrashSlashSolid;
