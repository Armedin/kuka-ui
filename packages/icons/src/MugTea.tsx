import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M464 64H64c-17.67 0-32 14.33-32 32l-.002 256c0 53.02 42.98 96 96 96h192c53.02 0 96-42.98 96-96l.002-64h48c61.8 0 112-50.2 112-112S525.8 64 464 64zm-80 288c0 35.29-28.71 64-64 64H128c-35.29 0-64-28.71-64-64V96h80v44l-35.2 26.4c-8.1 6-12.8 15.5-12.8 25.6l-.9 64c0 17.67 14.33 32 32 32h64c17.67 0 32-14.33 32-32l.9-64c0-10.07-4.742-19.56-12.8-25.6L176 140V96h208v256zM160 168l32 24v64h-64v-64l32-24zm304 88h-48V96h48c44.1 0 80 35.9 80 80s-35.9 80-80 80z" />
  </svg>
);

const SvgMugTea = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgMugTea;
