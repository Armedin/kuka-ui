import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M256 0v128h128L256 0zm-32 128V0H48C21.49 0 0 21.49 0 48v416c0 26.5 21.49 48 48 48h288c26.51 0 48-21.49 48-48V160H256.9c-18.6 0-32.9-14.3-32.9-32zm48.1 144.1L225.9 320l47.03 47.03c9.375 9.375 9.375 24.56 0 33.94-9.383 9.379-24.56 9.371-33.94 0L192 353.9l-47.03 47.03c-9.383 9.379-24.56 9.371-33.94 0-9.375-9.375-9.375-24.56 0-33.94L158.1 320 111 272.1c-9.375-9.375-9.375-24.56 0-33.94s24.56-9.375 33.94 0L192 286.1l47.03-47.03c9.375-9.375 24.56-9.375 33.94 0s9.33 24.53-.87 33.03z" />
  </svg>
);

const SvgFileXmarkSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgFileXmarkSolid;
