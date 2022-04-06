import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M288 32H64c-17.67 0-32 14.33-32 32v224c0 17.7 14.33 32 32 32h48c8.8 0 16 7.2 16 16s-7.2 16-16 16H64c-35.35 0-64-28.7-64-64V64C0 28.65 28.65 0 64 0h224c35.3 0 64 28.65 64 64v48c0 8.8-7.2 16-16 16s-16-7.2-16-16V64c0-17.67-14.3-32-32-32zm-32 80c0-8.8-7.2-16-16-16H112c-8.8 0-16 7.2-16 16v128c0 8.8 7.2 16 16 16s16 7.2 16 16-7.2 16-16 16H96c-17.67 0-32-14.3-32-32V96c0-17.67 14.33-32 32-32h160c17.7 0 32 14.33 32 32v16c0 8.8-7.2 16-16 16s-16-7.2-16-16zm-96 112c0-35.3 28.7-64 64-64h224c35.3 0 64 28.7 64 64v224c0 35.3-28.7 64-64 64H224c-35.3 0-64-28.7-64-64V224zm32 0v224c0 17.7 14.3 32 32 32h224c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32H224c-17.7 0-32 14.3-32 32z" />
  </svg>
);

const SvgSendBackward = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgSendBackward;
