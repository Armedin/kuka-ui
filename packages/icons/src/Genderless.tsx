import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M192 112c79.4 0 144 64.6 144 144s-64.6 144-144 144S48 335.4 48 256s64.6-144 144-144zm0-32C94.8 80 16 158.8 16 256s78.8 176 176 176 176-78.8 176-176S289.2 80 192 80z" />
  </svg>
);

const SvgGenderless = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgGenderless;
