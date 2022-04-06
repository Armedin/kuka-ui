import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M32 336h176v80c0 17.69 14.36 32 31.1 32a31.98 31.98 0 0 0 22.63-9.375l176-160C444.9 272.4 448 264.2 448 256s-3.125-16.38-9.375-22.62l-176-160C256.5 67.25 248.3 64 239.1 64 222.4 64 208 78.3 208 96v80H32c-17.67 0-32 14.33-32 32v96c0 17.7 14.33 32 32 32zm0-128h208l1.1-110.9L415.9 256 240 415.1V304H32v-96z" />
  </svg>
);

const SvgRight = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgRight;
