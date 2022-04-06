import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M320 256c35.35 0 64-28.65 64-64s-28.65-64-64-64-64 28.65-64 64c0 35.3 28.7 64 64 64zm-160 32c-35.35 0-64 28.65-64 64s28.65 64 64 64h192c35.35 0 64-28.65 64-64s-28.65-64-64-64H160zM384 64c17.67 0 32-14.33 32-32S401.67 0 384 0s-32 14.33-32 32 14.3 32 32 32zM208 96c26.5 0 48-21.49 48-48S234.5 0 208 0s-48 21.49-48 48 21.5 48 48 48zm208 96c0 27.82-12.02 52.68-30.94 70.21C421.7 275.7 448 310.7 448 352c0 53.02-42.98 96-96 96H160c-53.02 0-96-42.98-96-96s42.98-96 96-96h88.91C233.6 238.1 224 216.7 224 192H96c-53.02 0-96 42.1-96 96v128c0 53.02 42.98 96 96 96h320c53.02 0 96-42.98 96-96V288c0-53.9-43-96-96-96z" />
  </svg>
);

const SvgSoapSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgSoapSolid;
