import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M624 272H16c-8.844 0-16-7.1-16-16s7.156-16 16-16h608c8.844 0 16 7.131 16 15.97S632.8 272 624 272z" />
  </svg>
);

const SvgHorizontalRule = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgHorizontalRule;
