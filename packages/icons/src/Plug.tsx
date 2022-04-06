import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M96 0c8.8 0 16 7.164 16 16v96H80V16c0-8.836 7.16-16 16-16zm192 0c8.8 0 16 7.164 16 16v96h-32V16c0-8.836 7.2-16 16-16zm80 144c8.8 0 16 7.2 16 16s-7.2 16-16 16h-16v64c0 82.1-63.1 151.2-144 159.2V496c0 8.8-7.2 16-16 16s-16-7.2-16-16v-96.8c-80.85-8-144-77.1-144-159.2v-64H16c-8.836 0-16-7.2-16-16s7.164-16 16-16h352zM192 368c70.7 0 128-57.3 128-128v-64H64v64c0 70.7 57.3 128 128 128z" />
  </svg>
);

const SvgPlug = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgPlug;
