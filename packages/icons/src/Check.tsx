import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M443.3 100.7c6.3 6.2 6.3 16.4 0 22.6l-272 272c-6.2 6.3-16.4 6.3-22.6 0L4.686 251.3c-6.248-6.2-6.248-16.4 0-22.6 6.244-6.3 16.374-6.3 22.624 0L160 361.4l260.7-260.7c6.2-6.26 16.4-6.26 22.6 0z" />
  </svg>
);

const SvgCheck = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCheck;
