import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M448 64H192C85.96 64 0 149.1 0 256s85.96 192 192 192h256c106 0 192-85.96 192-192S554 64 448 64zm0 352H192c-88.22 0-160-71.78-160-160S103.78 96 192 96h256c88.22 0 160 71.78 160 160s-71.8 160-160 160zm-16.9-136c-13.28 0-23.1 10.72-23.1 24s10.72 24 23.1 24 23.1-10.72 23.1-24-9-24-23.1-24zm64-96c-13.28 0-23.1 10.72-23.1 24s10.72 24 23.1 24 23.1-10.72 23.1-24-9-24-23.1-24zM256 240h-48v-48c0-8.844-7.18-16-16.02-16S176 183.2 176 192v48h-48c-8.8 0-16.9 7.2-16.9 16s8.1 16 16.9 16h48v48c0 8.844 7.132 16 15.98 16S208 328.8 208 320v-48h48c8.844 0 15.98-7.156 15.98-16s-7.18-16-15.98-16z" />
  </svg>
);

const SvgGamepad = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgGamepad;
