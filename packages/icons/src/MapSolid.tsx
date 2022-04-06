import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="m384 476.1-192-54.9V35.93l192 54.86V476.1zm32-387.73 127.1-50.84c15.8-6.3 32.9 5.31 32.9 22.29V394.6c0 9.8-6 18.6-15.1 22.3L416 474.8V88.37zM15.09 95.13 160 37.17V423.6L32.91 474.5C17.15 480.8 0 469.2 0 452.2V117.4c0-9.8 5.975-18.62 15.09-22.27z" />
  </svg>
);

const SvgMapSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgMapSolid;
