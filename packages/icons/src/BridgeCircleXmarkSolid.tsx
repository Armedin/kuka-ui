import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M576 32c17.7 0 32 14.33 32 32s-14.3 32-32 32h-40v64h72v72.2c-30.4-25.1-69.5-40.2-112-40.2-69.1 0-128.9 39.8-157.7 97.7-5.9-1.1-12-1.7-18.3-1.7-53.9 0-96 42.1-96 96v64c0 17.7-14.3 32-32 32h-32c-17.7 0-32-14.3-32-32v-64c0-53.9-42.98-96-96-96V160h72V96H64c-17.67 0-32-14.33-32-32s14.33-32 32-32h512zm-88 64h-80v64h80V96zm-208 0v64h80V96h-80zm-48 0h-80v64h80V96zm120 272c0-79.5 64.5-144 144-144s144 64.5 144 144-64.5 144-144 144-144-64.5-144-144zm203.3-36.7c6.3-6.2 6.3-16.4 0-22.6-6.2-6.3-16.4-6.3-22.6 0L496 345.4l-36.7-36.7c-6.2-6.3-16.4-6.3-22.6 0-6.3 6.2-6.3 16.4 0 22.6l36.7 36.7-36.7 36.7c-6.3 6.2-6.3 16.4 0 22.6 6.2 6.3 16.4 6.3 22.6 0l36.7-36.7 36.7 36.7c6.2 6.3 16.4 6.3 22.6 0 6.3-6.2 6.3-16.4 0-22.6L518.6 368l36.7-36.7z" />
  </svg>
);

const SvgBridgeCircleXmarkSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgBridgeCircleXmarkSolid;
