import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M171.3 235.3c-6.2 6.3-16.4 6.3-22.6 0l-80.01-80c-6.25-6.2-6.25-16.4 0-22.6 6.24-6.3 16.37-6.3 22.62 0L160 201.4 308.7 52.69c6.2-6.25 16.4-6.25 22.6 0 6.3 6.24 6.3 16.37 0 22.62l-160 159.99zm0 224c-6.2 6.3-16.4 6.3-22.6 0L4.686 315.3c-6.248-6.2-6.248-16.4 0-22.6 6.244-6.3 16.374-6.3 22.624 0L160 425.4l260.7-260.7c6.2-6.3 16.4-6.3 22.6 0 6.3 6.2 6.3 16.4 0 22.6l-272 272z" />
  </svg>
);

const SvgCheckDouble = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCheckDouble;
