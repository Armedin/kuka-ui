import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M38.63 256 203.3 420.7c6.3 6.2 6.3 16.4 0 22.6-6.2 6.3-16.4 6.3-22.6 0L4.686 267.3c-6.248-6.2-6.248-16.4 0-22.6L180.7 68.69c6.2-6.25 16.4-6.25 22.6 0 6.3 6.25 6.3 16.38 0 22.62L38.63 256zM372.7 91.31c-6.3-6.24-6.3-16.37 0-22.62 6.2-6.25 16.4-6.25 22.6 0l176 176.01c6.3 6.2 6.3 16.4 0 22.6l-176 176c-6.2 6.3-16.4 6.3-22.6 0-6.3-6.2-6.3-16.4 0-22.6l164.7-165.6L372.7 91.31z" />
  </svg>
);

const SvgCodeSimple = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCodeSimple;
