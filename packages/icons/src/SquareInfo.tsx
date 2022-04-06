import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M224 184c13.25 0 24-10.74 24-24 0-13.25-10.75-24-24-24s-24 10.7-24 24 10.7 24 24 24zM384 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h320c35.35 0 64-28.65 64-64V96c0-35.35-28.7-64-64-64zm32 384c0 17.64-14.36 32-32 32H64c-17.64 0-32-14.36-32-32V96c0-17.64 14.36-32 32-32h320c17.64 0 32 14.36 32 32v320zm-144-64h-32V240c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16s7.2 16 16 16h16v96h-32c-8.8 0-16 7.2-16 16s7.2 16 16 16h96c8.836 0 16-7.164 16-16 0-8.8-7.2-16-16-16z" />
  </svg>
);

const SvgSquareInfo = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgSquareInfo;
