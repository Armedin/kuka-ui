import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M64 48c0-26.51 21.49-48 48-48h160c26.5 0 48 21.49 48 48H64zm256 416c0 26.5-21.5 48-48 48H112c-26.51 0-48-21.5-48-48h256zM0 160c0-44.2 35.82-80 80-80h224c44.2 0 80 35.8 80 80v192c0 44.2-35.8 80-80 80H80c-44.18 0-80-35.8-80-80V160zm100.8 104.1 80.1 77.2c6.2 6 16 6 22.2 0l80.1-77.2c20.1-19.4 20.1-51.6 0-71.1-19.2-18.4-49.5-18.4-68.6 0L192 214.9 169.4 193c-19.1-18.4-50.3-18.4-68.6 0-20.08 19.5-20.08 51.7 0 71.1z" />
  </svg>
);

const SvgWatchFitnessSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgWatchFitnessSolid;
