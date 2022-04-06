import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M256 64C109.1 64 0 125.9 0 208v98.13C0 384.5 114.6 448 256 448s256-63.5 256-141.9V208c0-82.1-110.9-144-256-144zm0 224c-52.9 0-100.9-8.9-135.6-23.4C155 249.9 201.6 240 256 240s101 9.875 135.6 24.62C356.9 279.1 308.9 288 256 288zm181.1-53.6C392.1 208.3 328.3 192 256 192s-136.1 16.3-181.12 42.4C68 226.1 64 217.3 64 208c0-44.1 85.1-80 192-80 105.1 0 192 35.88 192 80 0 9.3-4 18.1-10.9 26.4z" />
  </svg>
);

const SvgRingSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgRingSolid;
