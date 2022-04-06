import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M336 64h-53.88C268.9 26.8 233.7 0 192 0s-76.9 26.8-90.1 64H48C21.5 64 0 85.48 0 112v352c0 26.5 21.5 48 48 48h288c26.5 0 48-21.48 48-48V112c0-26.52-21.5-48-48-48zm-144 0c17.67 0 32 14.33 32 32s-14.33 32-32 32-32-14.3-32-32c0-17.67 14.3-32 32-32zm0 128c35.35 0 64 28.65 64 64s-28.65 64-64 64-64-28.7-64-64 28.7-64 64-64zm96 256H96c-8.836 0-16-7.164-16-16 0-44.2 35.8-80 80-80h64c44.18 0 80 35.82 80 80 0 8.8-7.2 16-16 16z" />
  </svg>
);

const SvgClipboardUserSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgClipboardUserSolid;
