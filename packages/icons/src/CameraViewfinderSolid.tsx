import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M0 24C0 10.75 10.75 0 24 0h112c13.3 0 24 10.75 24 24s-10.7 24-24 24H48v88c0 13.3-10.75 24-24 24S0 149.3 0 136V24zm208.6 72h94.8c10 0 18.9 6.2 22.4 15.6L332 128h36c26.5 0 48 21.5 48 48v160c0 26.5-21.5 48-48 48H144c-26.5 0-48-21.5-48-48V176c0-26.5 21.5-48 48-48h36l6.2-16.4c3.5-9.4 12.4-15.6 22.4-15.6zM256 320c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zM488 0c13.3 0 24 10.75 24 24v112c0 13.3-10.7 24-24 24s-24-10.7-24-24V48h-88c-13.3 0-24-10.75-24-24s10.7-24 24-24h112zM0 376c0-13.3 10.75-24 24-24s24 10.7 24 24v88h88c13.3 0 24 10.7 24 24s-10.7 24-24 24H24c-13.25 0-24-10.7-24-24V376zm376 136c-13.3 0-24-10.7-24-24s10.7-24 24-24h88v-88c0-13.3 10.7-24 24-24s24 10.7 24 24v112c0 13.3-10.7 24-24 24H376z" />
  </svg>
);

const SvgCameraViewfinderSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCameraViewfinderSolid;
