import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M480 128H96v128h101c3 0 5.8 1.8 7.1 4.4l19.9 39.9 49.75-99.38c5.875-11.88 22.62-11.88 28.5 0L329.9 256H400c8.9 0 16 7.1 16 16s-7.1 16-16 16h-89.88L288 243.8l-49.75 99.38c-5.875 11.88-22.65 11.89-28.52.01l-27.62-55.17L96 288v96h384V128zm48-96H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h480c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-16 384H64V96h448v320z" />
  </svg>
);

const SvgMonitorWaveformSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgMonitorWaveformSolid;
