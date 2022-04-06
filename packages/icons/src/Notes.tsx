import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M368 32c8.8 0 16-7.16 16-16s-7.2-16-16-16H96C42.98 0 0 42.98 0 96v272c0 8.8 7.164 16 16 16s16-7.2 16-16V96c0-35.34 28.66-64 64-64h272zm48 64H160c-35.35 0-64 28.65-64 63.1v256c0 36.2 28.7 64.9 64 64.9h165.5c16.97 0 33.25-6.742 45.26-18.75l90.51-90.51A63.855 63.855 0 0 0 480 325.5V160c0-35.3-28.6-64-64-64zm-64 338.7V368c0-8.828 7.188-16 16-16h66.75L352 434.7zM448 320h-80c-26.47 0-48 21.53-48 48v80H160c-17.64 0-32-14.36-32-32V160c0-17.64 14.36-32 32-32h256c17.64 0 32 14.36 32 32v160z" />
  </svg>
);

const SvgNotes = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgNotes;
