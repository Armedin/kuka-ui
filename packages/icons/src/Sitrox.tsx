import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M212.439.008V0H448v128H64C64 57.6 141.755.475 212.439.008ZM237.256 192v.007C307.135 192.475 384 249.6 384 320H210.809v-.005C140.915 319.563 64 262.424 64 192h173.256Zm-1.691 319.993C306.251 511.521 384 454.399 384 384H0v128h235.565v-.007Z" />
  </svg>
);

const SvgSitrox = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgSitrox;
