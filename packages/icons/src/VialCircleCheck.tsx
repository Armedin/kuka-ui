import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M0 48c0-8.84 7.164-16 16-16h224c8.8 0 16 7.16 16 16s-7.2 16-16 16h-16v202.8c-20.2 28.6-32 63.5-32 101.2V224H64v160c0 35.3 28.65 64 64 64 35.3 0 64-28.7 64-64v-16c0 25.2 5.3 49.1 14.8 70.8-17.3 24.9-46.2 41.2-78.8 41.2-53.02 0-96-43-96-96V64H16C7.164 64 0 56.84 0 48zm64 16v128h128V64H64zm371.3 260.7c6.3 6.2 6.3 16.4 0 22.6l-72 72c-6.2 6.3-16.4 6.3-22.6 0l-40-40c-6.3-6.2-6.3-16.4 0-22.6 6.2-6.3 16.4-6.3 22.6 0l28.7 28.7 60.7-60.7c6.2-6.3 16.4-6.3 22.6 0zM224 368c0-79.5 64.5-144 144-144s144 64.5 144 144-64.5 144-144 144-144-64.5-144-144zm144 112c61.9 0 112-50.1 112-112s-50.1-112-112-112-112 50.1-112 112 50.1 112 112 112z" />
  </svg>
);

const SvgVialCircleCheck = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgVialCircleCheck;
