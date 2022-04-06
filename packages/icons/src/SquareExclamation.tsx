import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M224 304c8.844 0 16-7.156 16-16V128c0-8.844-7.156-16-16-16s-16 7.2-16 16v160c0 8.8 7.2 16 16 16zM384 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h320c35.35 0 64-28.65 64-64V96c0-35.35-28.7-64-64-64zm32 384c0 17.64-14.36 32-32 32H64c-17.64 0-32-14.36-32-32V96c0-17.64 14.36-32 32-32h320c17.64 0 32 14.36 32 32v320zm-192-72c-13.25 0-24 10.75-24 24s10.75 24 24 24 24-10.75 24-24-10.7-24-24-24z" />
  </svg>
);

const SvgSquareExclamation = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgSquareExclamation;
