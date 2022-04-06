import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M447.1 0h-384C27.85 0-.9 28.75-.9 63.1v287.1c0 35.25 28.75 63.1 64 63.1h96v83.1c0 9.75 11.25 15.45 19.12 9.7l124.9-93.7h144c35.25 0 64-28.75 64-63.1V63.1C511.1 28.75 483.2 0 447.1 0zM264 288H152c-13.2 0-24-10.7-24-24s10.8-24 24-24h112c13.3 0 24 10.8 24 24s-10.7 24-24 24zm96-96H152c-13.2 0-24-10.7-24-24s10.8-24 24-24h208c13.3 0 24 10.8 24 24s-10.7 24-24 24z" />
  </svg>
);

const SvgMessageLinesSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgMessageLinesSolid;
