import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M284.2 0c12.1 0 23.2 6.848 28.6 17.69L320 32h96c17.7 0 32 14.33 32 32s-14.3 32-32 32H32C14.33 96 0 81.67 0 64s14.33-32 32-32h96l7.2-14.31C140.6 6.848 151.7 0 163.8 0h120.4zM31.1 128H416l-21.2 338.1c-1.6 26.2-22.5 45.9-47.9 45.9H101.1c-25.35 0-46.33-19.7-47.91-45.9L31.1 128zm308.7 123.8c10.9-10.9 10.9-28.7 0-39.6-10.9-10.9-28.7-10.9-39.6 0L192 320.4l-44.2-44.2c-10.9-10.9-28.7-10.9-39.6 0-10.93 10.9-10.93 28.7 0 39.6l64 64c10.9 10.9 28.7 10.9 39.6 0l128-128z" />
  </svg>
);

const SvgTrashCheckSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgTrashCheckSolid;
