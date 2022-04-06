import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M447.1 0h-384C27.85 0-.9 28.75-.9 63.1v287.1c0 35.25 28.75 63.1 64 63.1h96v83.1c0 9.75 11.25 15.45 19.12 9.7l124.9-93.7h144c35.25 0 64-28.75 64-63.1V63.1C511.1 28.75 483.2 0 447.1 0zm-312 320H120c-13.3 0-24-10.7-24-24s10.7-24 23.1-24h15.1c13.25 0 23.1 10.75 23.1 24s-8.1 24-22.2 24zm-16-80c-12.4 0-23.1-10.7-23.1-24s10.7-24 23.1-24h95.99c13.25 0 23.1 10.75 23.1 24s-8.99 23.1-23.09 23.1l-96 .9zm176 80h-80c-13.25 0-23.1-10.75-23.1-24s10.7-24 23.1-24h79.99c13.25 0 23.1 10.75 23.1 24s-8.99 24-23.09 24zm96 0H376c-13.25 0-23.1-10.75-23.1-24s10.75-24 23.1-24h15.1c13.25 0 23.1 10.75 23.1 24s-9 24-23.1 24zm0-80h-95.99c-13.25 0-23.1-10.75-23.1-24s10.69-24 23.09-24h95.99c13.25 0 23.1 10.75 23.1 24s-8.99 24-23.09 24z" />
  </svg>
);

const SvgMessageCaptionsSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgMessageCaptionsSolid;
