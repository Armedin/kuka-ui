import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M448 128c35.3 0 64 28.7 64 64v256c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64V192c0-35.3 28.65-64 64-64h384zm0 32H64c-17.67 0-32 14.3-32 32v256c0 17.7 14.33 32 32 32h384c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm0-96c8.8 0 16 7.16 16 16s-7.2 16-16 16H64c-8.84 0-16-7.16-16-16s7.16-16 16-16h384zM400 0c8.8 0 16 7.164 16 16 0 8.84-7.2 16-16 16H112c-8.8 0-16-7.16-16-16 0-8.836 7.2-16 16-16h288z" />
  </svg>
);

const SvgRectangleHistory = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgRectangleHistory;
