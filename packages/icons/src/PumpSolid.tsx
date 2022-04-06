import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M160 224H96v160h224V96H160v128zM32 192c-17.6 0-32 14.3-32 32v160c0 17.66 14.4 32 32 32s32-14.34 32-32V224c0-17.7-14.4-32-32-32zm576-96H467.5c-12.8 0-25.3 3.74-35.5 10.8l-65.6 43.74A31.69 31.69 0 0 0 352 177.1v253.8c0 10.69 5.441 20.67 14.4 26.62L432 501.2c10.2 7.1 22.7 10.8 35.5 10.8H608c17.6 0 32-14.34 32-32V128c0-17.7-14.4-32-32-32zm-48 320h-96c-8.961 0-16-7.168-16-16s7.039-16 16-16h96c8.961 0 16 7.168 16 16s-7.9 16-16 16zm0-96h-96c-9 0-16-7.2-16-16s7-16 16-16h96c8.1 0 16 7.2 16 16s-7.9 16-16 16zm0-96h-96c-9 0-16-7.2-16-16s7-16 16-16h96c8.1 0 16 7.2 16 16s-7.9 16-16 16zM320 0H160c-17.6 0-32 14.34-32 32s14.4 32 32 32h160c17.6 0 32-14.34 32-32S337.6 0 320 0z" />
  </svg>
);

const SvgPumpSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgPumpSolid;
