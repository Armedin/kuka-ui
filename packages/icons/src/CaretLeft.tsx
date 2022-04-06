import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512" {...props}>
    <path d="M192 383.1V128c0-28.37-34.5-42.74-54.63-22.62l-128 127.1c-12.5 12.5-12.5 32.75 0 45.25l128 127.1C157.5 426.7 192 412.5 192 383.1zm-160-128L160 128v255.9L32 255.1z" />
  </svg>
);

const SvgCaretLeft = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCaretLeft;
