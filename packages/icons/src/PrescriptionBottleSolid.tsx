import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M32 192h112c8.8 0 16 7.2 16 16s-7.2 16-16 16H32v64h112c8.8 0 16 7.2 16 16s-7.2 16-16 16H32v64h112c8.8 0 16 7.2 16 16s-7.2 16-16 16H32v32c0 35.2 28.8 64 64 64h192c35.2 0 64-28.8 64-64V128H32v64zM360 0H24C10.75 0 0 10.75 0 24v48c0 13.25 10.75 24 24 24h336c13.3 0 24-10.75 24-24V24c0-13.25-10.7-24-24-24z" />
  </svg>
);

const SvgPrescriptionBottleSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgPrescriptionBottleSolid;
