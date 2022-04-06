import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="m201.4 144 11.3-11.3c3-3 7.1-4.7 10.4-4.7H288c4.2 0 8.3 1.7 11.3 4.7l11.3 11.3H352c8.8 0 16 7.2 16 16s-7.2 16-16 16h-2.1l-12.8 178.1c-.2 16.8-14.2 29.9-31 29.9H205.9c-16.8 0-30.8-13.1-31.9-29.9L162.1 176h-3c-7.9 0-16-7.2-16-16s8.1-16 16-16h42.3zm116.4 32H194.2l11.7 176h100.2l11.7-176zM512 256c0 141.4-114.6 256-256 256S0 397.4 0 256 114.6 0 256 0s256 114.6 256 256zM256 32C132.3 32 32 132.3 32 256s100.3 224 224 224 224-100.3 224-224S379.7 32 256 32z" />
  </svg>
);

const SvgCircleTrash = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCircleTrash;
