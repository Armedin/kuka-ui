import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M432 48c8.8 0 16 7.16 16 16s-7.2 16-16 16H176c-8.8 0-16-7.16-16-16s7.2-16 16-16h256zm0 128c8.8 0 16 7.2 16 16s-7.2 16-16 16H16c-8.836 0-16-7.2-16-16s7.164-16 16-16h416zm0 160H176c-8.8 0-16-7.2-16-16s7.2-16 16-16h256c8.8 0 16 7.2 16 16s-7.2 16-16 16zm0 96c8.8 0 16 7.2 16 16s-7.2 16-16 16H16c-8.836 0-16-7.2-16-16s7.164-16 16-16h416z" />
  </svg>
);

const SvgAlignRight = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgAlignRight;
