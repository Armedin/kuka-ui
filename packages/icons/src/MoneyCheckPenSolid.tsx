import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M512 64c35.3 0 64 28.65 64 64v64.6c-15.2 2-29.8 8.8-41.4 20.5L353.3 394.3c-8.2 8.2-14 18.5-16.8 29.8l-6 23.9H64c-35.35 0-64-28.7-64-64V128c0-35.35 28.65-64 64-64h448zM112 288c-8.8 0-16 7.2-16 16s7.2 16 16 16h224c8.8 0 16-7.2 16-16s-7.2-16-16-16H112zm0-64h320c8.8 0 16-7.2 16-16s-7.2-16-16-16H112c-8.8 0-16 7.2-16 16s7.2 16 16 16zm516.1 26.1c15.7 15.6 15.7 40.9 0 56.6l-29.4 29.4-70.9-71 29.4-29.4c15.6-15.6 40.9-15.6 56.6 0l14.3 14.4zm-252.2 166 129.2-128.3 71 70.9-129.2 129.2c-4.1 4.1-9.3 7-14.9 8.4l-60.1 15.1c-5.5 1.3-11.2-.3-15.2-4.2-4-4-5.6-9.8-4.2-16.1l15-59.3c1.4-5.6 4.3-10.7 8.4-15.7z" />
  </svg>
);

const SvgMoneyCheckPenSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgMoneyCheckPenSolid;
