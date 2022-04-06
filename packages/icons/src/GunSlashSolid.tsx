import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M32 196.8c0 23.9 19.33 43.2 43.17 43.2 21.26 0 36.61 20.35 30.77 40.79l-40.69 158.4C59.41 459.6 74.76 480 96.02 480h103.8c14.29 0 26.84-9.469 30.77-23.21L258.4 352h67.39L32 121.8v75zm598.8 272.3L411.5 297.2l19.1-57.2h36.1c8.486 0 16.62-3.369 22.63-9.373L512 208h64c17.67 0 32-14.33 32-32V96c0-17.67-14.33-32-32-32h-16v-8c0-13.26-10.7-24-24-24s-24 10.74-24 24v8H113.1L38.81 5.109A23.96 23.96 0 0 0 24.03 0C16.91 0 9.846 3.156 5.127 9.188-3.061 19.62-1.248 34.72 9.189 42.89l591.1 463.1c10.5 8.203 25.56 6.328 33.69-4.078C643.1 492.4 641.2 477.3 630.8 469.1zM195.6 128H512v32H236.4l-40.8-32zm175.8 137.8L338.5 240h41.52l-8.62 25.8z" />
  </svg>
);

const SvgGunSlashSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgGunSlashSolid;
