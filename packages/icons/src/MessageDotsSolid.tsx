import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M447.1 0h-384C27.85 0-.9 28.75-.9 63.1v287.1c0 35.25 28.75 63.1 64 63.1h96v83.1c0 9.749 11.25 15.45 19.12 9.7l124.9-93.7h144c35.25 0 64-28.75 64-63.1V63.1C511.1 28.75 483.2 0 447.1 0zm-320 239.1c-17.75 0-32-14.25-32-31.1s14.25-31.1 32-31.1 32 14.25 32 31.1-13.4 31.1-32 31.1zm128 0c-17.75 0-32-14.25-32-31.1s14.25-31.1 32-31.1 32 14.25 32 31.1-13.4 31.1-32 31.1zm128 0c-17.75 0-32-14.25-32-31.1s14.25-31.1 32-31.1 32 14.25 32 31.1-13.4 31.1-32 31.1z" />
  </svg>
);

const SvgMessageDotsSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgMessageDotsSolid;
