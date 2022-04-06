import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M0 448c0 35.35 28.65 64 64 64h320c35.35 0 64-28.65 64-64V128H0v320zm112-240h224c8.8 0 16 7.2 16 16 0 8.836-7.164 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 96h224c8.836 0 16 7.162 16 16 0 8.836-7.164 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 96h96c8.836 0 16 7.162 16 16 0 8.836-7.164 16-16 16h-96c-8.8 0-16-7.2-16-16s7.2-16 16-16zM384 0H64C28.65 0 0 28.65 0 64v32h448V64c0-35.35-28.7-64-64-64z" />
  </svg>
);

const SvgMemoPadSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgMemoPadSolid;
