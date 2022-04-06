import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M168 0c13.3 0 24 10.75 24 24v40h-64V24c0-13.25 10.7-24 24-24h16zM0 160c0-35.3 28.65-64 64-64h224c35.3 0 64 28.7 64 64v288c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64V160zm64 272c0 8.8 7.16 16 16 16h192c8.8 0 16-7.2 16-16V176c0-8.8-7.2-16-16-16H80c-8.84 0-16 7.2-16 16v256zM288 24c0-13.25 10.7-24 24-24h16c13.3 0 24 10.75 24 24v40h-64V24zm-32-8v48h-32V16c0-8.836 7.2-16 16-16s16 7.164 16 16zm128 0c0-8.836 7.2-16 16-16s16 7.164 16 16v256c0 8.8-7.2 16-16 16s-16-7.2-16-16V16zM488 0c13.3 0 24 10.75 24 24v240c0 13.3-10.7 24-24 24h-16c-13.3 0-24-10.7-24-24V24c0-13.25 10.7-24 24-24h16z" />
  </svg>
);

const SvgScannerTouchscreenSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgScannerTouchscreenSolid;
