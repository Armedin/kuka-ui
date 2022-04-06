import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M144 240c0-44.2 35.8-80 80-80s80 35.8 80 80-35.8 80-80 80-80-35.8-80-80zM512 0c35.3 0 64 28.65 64 64v352c0 35.3-28.7 64-64 64h-16l-16 32h-64l-16-32H176l-16 32H96l-16-32H64c-35.35 0-64-28.7-64-64V64C0 28.65 28.65 0 64 0h448zM224 400c88.4 0 160-71.6 160-160S312.4 80 224 80 64 151.6 64 240s71.6 160 160 160zm256-178.7c18.6-6.6 32-24.4 32-45.3 0-26.5-21.5-48-48-48s-48 21.5-48 48c0 20.9 13.4 38.7 32 45.3V336c0 8.8 7.2 16 16 16s16-7.2 16-16V221.3z" />
  </svg>
);

const SvgVaultSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgVaultSolid;
