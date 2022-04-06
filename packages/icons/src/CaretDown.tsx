import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" {...props}>
    <path d="M287.1 192H32c-28.37 0-42.74 34.5-22.62 54.63l127.1 128c12.5 12.5 32.75 12.5 45.25 0l127.1-128C330.7 226.5 316.5 192 287.1 192zm-128 160L32.01 224h255.9L159.1 352z" />
  </svg>
);

const SvgCaretDown = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCaretDown;
