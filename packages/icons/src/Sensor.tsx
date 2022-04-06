import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M384 32H64C28.62 32 0 60.62 0 96v320c0 35.38 28.62 64 64 64h320c35.38 0 64-28.62 64-64V96c0-35.38-28.6-64-64-64zm32 384c0 17.62-14.38 32-32 32H64c-17.62 0-32-14.38-32-32V96c0-17.62 14.38-32 32-32h320c17.62 0 32 14.38 32 32v320zM112 128c-8.9 0-16 7.1-16 16v128c0 8.9 7.1 16 16 16s16-7.1 16-16V144c0-8.9-7.1-16-16-16zm64 0c-8.9 0-16 7.1-16 16v128c0 8.9 7.1 16 16 16s16-7.1 16-16V144c0-8.9-7.1-16-16-16zm64 0c-8.9 0-16 7.1-16 16v128c0 8.9 7.1 16 16 16s16-7.1 16-16V144c0-8.9-7.1-16-16-16z" />
  </svg>
);

const SvgSensor = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgSensor;
