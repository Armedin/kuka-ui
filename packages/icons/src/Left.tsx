import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M416 176H240V96c0-17.69-14.36-32-31.1-32-9.2 0-17.4 3.25-23.5 9.38l-176 160C3.125 239.6 0 247.8 0 256s3.125 16.38 9.375 22.62l176 160C191.5 444.7 199.7 448 208 448c17.6 0 32-14.3 32-32v-80h176c17.67 0 32-14.33 32-32v-96c0-17.7-14.3-32-32-32zm0 128H208l-1.1 110.9L32.06 256 208 96v112h208v96z" />
  </svg>
);

const SvgLeft = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgLeft;
