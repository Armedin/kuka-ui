import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M576 0H64C28.65 0 0 28.65 0 64v320c0 35.35 28.65 64 64 64h512c35.35 0 64-28.65 64-64V64c0-35.35-28.7-64-64-64zm32 384c0 17.64-14.36 32-32 32H64c-17.64 0-32-14.36-32-32V64c0-17.64 14.36-32 32-32h512c17.64 0 32 14.36 32 32v320zm-80 96H112c-8.8 0-16 7.2-16 16s7.2 16 16 16h416c8.838 0 16-7.164 16-16 0-8.8-7.2-16-16-16z" />
  </svg>
);

const SvgTv = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgTv;
