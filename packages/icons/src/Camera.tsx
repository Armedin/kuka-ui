import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M144 288c0-61.9 50.1-112 112-112s112 50.1 112 112-50.1 112-112 112-112-50.1-112-112zm112-80c-44.2 0-80 35.8-80 80s35.8 80 80 80 80-35.8 80-80-35.8-80-80-80zM362.9 64.82 373.3 96H448c35.3 0 64 28.7 64 64v256c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64V160c0-35.3 28.65-64 64-64h74.7l10.4-31.18C155.6 45.22 173.9 32 194.6 32h122.8c20.7 0 39 13.22 45.5 32.82zM64 128c-17.67 0-32 14.3-32 32v256c0 17.7 14.33 32 32 32h384c17.7 0 32-14.3 32-32V160c0-17.7-14.3-32-32-32h-97.7l-17.7-53.06C330.4 68.41 324.3 64 317.4 64H194.6c-6.9 0-13 4.41-15.2 10.94L161.7 128H64z" />
  </svg>
);

const SvgCamera = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCamera;
