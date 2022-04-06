import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M384 32H64C28.62 32 0 60.62 0 96v320c0 35.38 28.62 64 64 64h320c35.38 0 64-28.62 64-64V96c0-35.38-28.6-64-64-64zM96 272c0 8.9-7.12 16-16 16s-16-7.1-16-16V112c0-8.9 7.13-16 16-16s16 7.1 16 16v160zm64 0c0 8.9-7.1 16-16 16s-16-7.1-16-16V112c0-8.9 7.1-16 16-16s16 7.1 16 16v160zm64 0c0 8.9-7.1 16-16 16s-16-7.1-16-16V112c0-8.9 7.1-16 16-16s16 7.1 16 16v160z" />
  </svg>
);

const SvgSensorSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgSensorSolid;
