import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M336 160c-8.8 0-16 7.2-16 16v272c0 17.67-14.33 32-32 32H96c-17.67 0-32-14.33-32-32v-32h80c8.8 0 16-7.2 16-16s-7.2-16-16-16H64v-64h80c8.8 0 16-7.2 16-16s-7.2-16-16-16H64v-64h80c8.8 0 16-7.2 16-16s-7.2-16-16-16H64v-16c0-8.8-7.16-16-16-16s-16 7.2-16 16v272c0 35.2 28.8 64 64 64h192c35.2 0 64-28.8 64-64V176c0-8.8-7.2-16-16-16zM352 0H32C14.33 0 0 14.33 0 32v64c0 17.67 14.33 32 32 32h320c17.67 0 32-14.33 32-32V32c0-17.67-14.3-32-32-32zm0 96H32V32h320v64z" />
  </svg>
);

const SvgPrescriptionBottle = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgPrescriptionBottle;
