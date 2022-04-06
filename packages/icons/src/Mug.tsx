import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M464 64H64c-17.67 0-32 14.33-32 32v256c0 53.02 42.98 96 96 96h192c53.02 0 96-42.98 96-96v-64h48c61.8 0 112-50.2 112-112S525.8 64 464 64zm-80 288c0 35.29-28.71 64-64 64H128c-35.29 0-64-28.71-64-64V96h320v256zm80-96h-48V96h48c44.1 0 80 35.9 80 80s-35.9 80-80 80z" />
  </svg>
);

const SvgMug = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgMug;
