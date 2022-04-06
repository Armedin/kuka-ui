import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M224 480h224c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32h-48c-8.8 0-16-7.2-16-16s7.2-16 16-16h48c35.3 0 64 28.7 64 64v224c0 35.3-28.7 64-64 64H224c-35.3 0-64-28.7-64-64v-48c0-8.8 7.2-16 16-16s16 7.2 16 16v48c0 17.7 14.3 32 32 32zm64-224c0 17.7-14.3 32-32 32H96c-17.67 0-32-14.3-32-32V96c0-17.67 14.33-32 32-32h160c17.7 0 32 14.33 32 32v160zm-32-144c0-8.8-7.2-16-16-16H112c-8.8 0-16 7.2-16 16v128c0 8.8 7.2 16 16 16h128c8.8 0 16-7.2 16-16V112zM64 352c-35.35 0-64-28.7-64-64V64C0 28.65 28.65 0 64 0h224c35.3 0 64 28.65 64 64v224c0 35.3-28.7 64-64 64H64zm0-32h224c17.7 0 32-14.3 32-32V64c0-17.67-14.3-32-32-32H64c-17.67 0-32 14.33-32 32v224c0 17.7 14.33 32 32 32z" />
  </svg>
);

const SvgBringForward = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgBringForward;
