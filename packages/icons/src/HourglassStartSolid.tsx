import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M352 0c17.7 0 32 14.33 32 32s-14.3 32-32 32v10.98c0 42.42-16.9 83.12-46.9 113.12L237.3 256l67.8 67.9c30 30 46.9 70.7 46.9 113.1v11c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.67 0-32-14.3-32-32s14.33-32 32-32v-11c0-42.4 16.86-83.1 46.86-113.1L146.7 256l-67.84-67.9C48.86 158.1 32 117.4 32 74.98V64C14.33 64 0 49.67 0 32S14.33 0 32 0h320zm-92.1 369.1L192 301.3l-67.9 67.8c-18 18-28.1 42.5-28.1 67.9v11h192v-11c0-25.4-10.1-49.9-28.1-67.9z" />
  </svg>
);

const SvgHourglassStartSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgHourglassStartSolid;