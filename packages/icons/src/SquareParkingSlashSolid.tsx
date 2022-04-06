import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M107.7 59.11C119.3 42.71 138.4 32 159.1 32H480c35.3 0 64 28.65 64 64v305.1l86.8 68c10.4 8.2 12.3 23.3 4.1 33.7-8.2 10.4-23.3 12.3-33.7 4.1L9.196 42.89C-1.236 34.71-3.065 19.63 5.112 9.196 13.29-1.236 28.37-3.065 38.81 5.112L107.7 59.11zM227 152.7l60.1 47.7V192H336c17.7 0 32 14.3 32 32 0 11.5-6.1 21.6-15.2 27.2l51.4 40.3c17.2-17.3 27.8-41.2 27.8-67.5 0-53.9-43-96-96-96h-72.9c-15.8 0-30 10.2-36.1 24.7zM223.1 352c0 17.7 15.2 32 32 32 18.6 0 32-14.3 32-32v-29.1l199.8 156.7c-2.3.3-4.6.4-6.9.4H159.1c-34.4 0-64-28.7-64-64V171.6l128 100.9V352z" />
  </svg>
);

const SvgSquareParkingSlashSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgSquareParkingSlashSolid;
