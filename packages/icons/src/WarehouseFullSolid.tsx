import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M0 488V171.3c0-26.1 15.93-49.7 40.23-59.4L308.1 4.753a32.087 32.087 0 0 1 23.8 0L599.8 111.9c24.3 9.7 40.2 33.3 40.2 59.4V488c0 13.3-10.7 24-24 24h-48c-13.3 0-24-10.7-24-24V223.1c0-16.8-14.3-32-32-32H128c-17.7 0-32 15.2-32 32V488c0 13.3-10.75 24-24 24H24c-13.25 0-24-10.7-24-24zm488-104c13.3 0 24 10.7 24 24v80c0 13.3-10.7 24-24 24H376c-13.3 0-24-10.7-24-24v-80c0-13.3 10.7-24 24-24h112zM128 247.1c0-12.4 10.7-24 24-24h144c13.3 0 24 11.6 24 24V328c0 13.3-10.7 24-24 24H152c-13.3 0-24-10.7-24-24v-80.9zM296 384c13.3 0 24 10.7 24 24v80c0 13.3-10.7 24-24 24H152c-13.3 0-24-10.7-24-24v-80c0-13.3 10.7-24 24-24h144z" />
  </svg>
);

const SvgWarehouseFullSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgWarehouseFullSolid;
