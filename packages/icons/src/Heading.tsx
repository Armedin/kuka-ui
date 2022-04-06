import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M448 464c0 8.799-7.199 16-16 16H304c-8.801 0-16-7.201-16-16 0-8.801 7.199-16 16-16h48V256H96v192h48c8.8 0 16 7.2 16 16s-7.2 16-16 16H16c-8.801 0-16-7.2-16-16s7.199-16 16-16h48V64H16C7.199 64 0 56.8 0 48s7.199-16 16-16h128c8.8 0 16 7.2 16 16s-7.2 16-16 16H96v160h256V64h-48c-8.8 0-16-7.2-16-16s7.2-16 16-16h128c8.8 0 16 7.2 16 16s-7.2 16-16 16h-48v384h48c8.8 0 16 7.2 16 16z" />
  </svg>
);

const SvgHeading = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgHeading;
