import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M256 128h64c17.67 0 32-14.33 32-32V32c0-17.67-14.33-32-32-32h-64c-17.7 0-32 14.33-32 32v64c0 17.7 14.3 32 32 32zm0-96h64v64h-64V32zm32 288c35.35 0 64-28.65 64-64s-28.65-64-64-64-64 28.7-64 64 28.7 64 64 64zm0-96c17.64 0 32 14.36 32 32s-14.36 32-32 32-32-14.4-32-32 14.4-32 32-32zM512 64H400c-8.8 0-16 7.16-16 15.1S391.2 96 399.1 96H512c17.67 0 32 14.33 32 32v320c0 17.67-14.33 32-32 32H64c-17.67 0-32-14.33-32-32V128c0-17.67 14.33-32 32-32h112c8.8 0 16-7.16 16-16s-7.2-16-16-16H64C28.65 64 0 92.65 0 128v320c0 35.35 28.65 64 64 64h448c35.35 0 64-28.65 64-64V128c0-35.35-28.7-64-64-64zM192 448c8.836 0 16-7.164 16-16 0-26.5 21.5-48 48-48h64c26.51 0 48 21.49 48 48 0 8.836 7.164 16 16 16s16-7.164 16-16c0-44.18-35.82-80-80-80h-64c-44.18 0-80 35.82-80 80 0 8.8 7.2 16 16 16z" />
  </svg>
);

const SvgIdCardClip = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgIdCardClip;
