import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M112 320h224c8.836 0 16-7.164 16-16 0-8.8-7.2-16-16-16H112c-8.8 0-16 7.2-16 16s7.2 16 16 16zm0-96h224c8.8 0 16-7.2 16-16s-7.2-16-16-16H112c-8.8 0-16 7.2-16 16s7.2 16 16 16zm0 192h128c8.836 0 16-7.164 16-16 0-8.838-7.164-16-16-16H112c-8.8 0-16 7.2-16 16s7.2 16 16 16zM384 0H64C28.65 0 0 28.65 0 64v384c0 35.35 28.65 64 64 64h320c35.35 0 64-28.65 64-64V64c0-35.35-28.7-64-64-64zm32 448c0 17.64-14.36 32-32 32H64c-17.64 0-32-14.36-32-32V128h384v320zm0-352H32V64c0-17.64 14.36-32 32-32h320c17.64 0 32 14.36 32 32v32z" />
  </svg>
);

const SvgMemoPad = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgMemoPad;
