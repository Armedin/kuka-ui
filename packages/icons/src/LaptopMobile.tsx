import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M576 128H448c-35.2 0-64 28.8-64 64v256c0 35.2 28.8 64 64 64h128c35.2 0 64-28.8 64-64V192c0-35.2-28.8-64-64-64zm32 320c0 17.67-14.33 32-32 32H448c-17.67 0-32-14.33-32-32V192c0-17.67 14.33-32 32-32h128c17.67 0 32 14.33 32 32v256zM96 64c0-17.67 14.33-32 32-32h320c17.67 0 32 14.33 32 32v16c0 8.84 7.2 16 15.1 16S512 88.84 512 80V64c0-35.2-28.8-64-64-64H128C92.8 0 64 28.8 64 64v224H16c-8.837 0-16 7.2-16 16v16c.125 35.25 28.63 63.88 63.88 64h272.1c8.82 0 16.02-7.2 16.02-16s-7.2-16-16-16H63.88C46.25 352 32 337.6 32 320h304c8.8 0 16-7.2 16-16s-7.2-16-16-16H96V64z" />
  </svg>
);

const SvgLaptopMobile = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgLaptopMobile;
