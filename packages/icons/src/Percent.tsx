import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M379.3 68.69c-6.25-6.25-16.38-6.25-22.62 0l-352 352c-6.25 6.25-6.25 16.38 0 22.62C7.813 446.4 11.91 448 16 448s8.188-1.562 11.31-4.688l352-352a15.91 15.91 0 0 0-.01-22.622zM64 192c35.35 0 64-28.65 64-64S99.35 64.01 64 64.01 0 92.66 0 127.11 28.65 192 64 192zm0-96c17.64 0 32 14.36 32 32s-14.36 32-32 32-32-14.4-32-32 14.36-32 32-32zm256 224c-35.35 0-64 28.65-64 64s28.65 64 64 64 64-28.65 64-64-28.7-64-64-64zm0 96c-17.64 0-32-14.36-32-32s14.36-32 32-32 32 14.36 32 32-14.4 32-32 32z" />
  </svg>
);

const SvgPercent = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgPercent;
