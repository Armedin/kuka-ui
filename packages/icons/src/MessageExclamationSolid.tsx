import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M447.1 0h-384C27.85 0-.9 28.75-.9 63.1v287.1c0 35.25 28.75 63.1 64 63.1h96v83.1c0 9.75 11.25 15.45 19.12 9.7l124.9-93.7h144c35.25 0 64-28.75 64-63.1V63.1C511.1 28.75 483.2 0 447.1 0zM232 104c0-13.25 10.8-24 24-24s24 10.75 24 24v112c0 13.25-10.75 24-24 24s-24-10.7-24-24V104zm24 232c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32c0 17.7-14.3 32-32 32z" />
  </svg>
);

const SvgMessageExclamationSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgMessageExclamationSolid;
