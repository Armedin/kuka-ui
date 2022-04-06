import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M336 160c-8.8 0-16 7.2-16 16v272c0 17.67-14.33 32-32 32H96c-17.67 0-32-14.33-32-32V176c0-8.8-7.16-16-16-16s-16 7.2-16 16v272c0 35.2 28.8 64 64 64h192c35.2 0 64-28.8 64-64V176c0-8.8-7.2-16-16-16zM352 0H32C14.33 0 0 14.33 0 32v64c0 17.67 14.33 32 32 32h320c17.67 0 32-14.33 32-32V32c0-17.67-14.3-32-32-32zm0 96H32V32h320v64zm-144 96h-32c-8.8 0-16 7.2-16 16v48h-48c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h48v48c0 8.8 7.2 16 16 16h32c8.836 0 16-7.164 16-16v-48h48c8.836 0 16-7.164 16-16v-32c0-8.8-7.2-16-16-16h-48v-48c0-8.8-7.2-16-16-16z" />
  </svg>
);

const SvgPrescriptionBottleMedical = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgPrescriptionBottleMedical;
