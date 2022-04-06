import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M447.1 0h-384C27.85 0-.9 28.75-.9 63.1v287.1c0 35.25 28.75 63.1 64 63.1h96v83.1c0 9.75 11.25 15.45 19.12 9.7l124.9-93.7h144c35.25 0 64-28.75 64-63.1V63.1C511.1 28.75 483.2 0 447.1 0zm-99.4 167.6-96 112c-4.3 5.1-10.6 8.1-17.3 7.5h-.9a24.04 24.04 0 0 1-16.97-7.031l-48-48c-9.375-9.375-9.375-24.56 0-33.94s24.56-9.375 33.94 0l29.69 29.69 79.13-92.34c8.656-10.06 23.81-11.19 33.84-2.594C355.2 142.4 356.3 157.5 347.7 167.6z" />
  </svg>
);

const SvgMessageCheckSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgMessageCheckSolid;
