import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M64 48c0-26.51 21.49-48 48-48h160c26.5 0 48 21.49 48 48H64zm240 32c44.2 0 80 35.8 80 80v192c0 44.2-35.8 80-80 80H80c-44.18 0-80-35.8-80-80V160c0-44.2 35.82-80 80-80h224zm-88 80c0-13.3-10.7-24-24-24s-24 10.7-24 24v96c0 6.4 2.5 12.5 7 16.1l48 48c9.4 10.2 24.6 10.2 33.1 0 10.2-8.5 10.2-23.7 0-33.1L216 246.1V160zM112 512c-26.51 0-48-21.5-48-48h256c0 26.5-21.5 48-48 48H112z" />
  </svg>
);

const SvgWatchSmartSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgWatchSmartSolid;
