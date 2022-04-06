import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M447.1 0h-384C27.85 0-.9 28.75-.9 63.1v287.1c0 35.25 28.75 63.1 64 63.1h96v83.1c0 9.749 11.25 15.45 19.12 9.7l124.9-93.7h144c35.25 0 64-28.75 64-63.1V63.1C511.1 28.75 483.2 0 447.1 0zm-232 304.9a13.989 13.989 0 0 1-7.152 3.828L152.4 319.9c-4.896.98-9.216-3.34-8.238-8.234l11.11-55.53a14.003 14.003 0 0 1 3.83-7.156l97.61-97.61 56.01 56L215.1 304.9zm144.7-144.7-24.48 24.47-56.01-56 24.48-24.48c10.93-10.93 28.66-10.93 39.6 0l16.41 16.41c10.9 11 10.9 28.7 0 39.6z" />
  </svg>
);

const SvgMessagePenSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgMessagePenSolid;
