import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M64 32h32v448H64c-35.35 0-64-28.66-64-64V96c0-35.34 28.65-64 64-64zm64 0h320v448H128V32zm48 250c0 8.835 7.164 16 16 16h53.1v54c0 8.836 7.165 16 16 16h52c8.836 0 16-7.164 16-16v-54H384c8.836 0 16-7.165 16-16v-52c0-8.837-7.164-16-16-16h-54v-54c0-8.836-7.164-16-16-16h-52c-8.835 0-16 7.164-16 16v54h-54c-8.836 0-16 7.163-16 16v52zM512 32h-32v448h32c35.35 0 64-28.66 64-64V96c0-35.34-28.7-64-64-64z" />
  </svg>
);

const SvgKitMedicalSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgKitMedicalSolid;
