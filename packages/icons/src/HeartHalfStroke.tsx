import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M119.4 44.1c44.7-7.59 92 7.27 124.6 39.92L255.1 96l12-11.98C300.6 51.37 347 36.51 392.6 44.1c68.9 11.48 119.4 71.1 119.4 141v5.8c0 41.5-17.2 81.2-47.6 109.5L283.7 469.1c-7.5 7-17.4 10.9-27.7 10.9s-20.2-3.9-27.7-10.9L47.59 300.4C17.23 272.1 0 232.4 0 190.9v-5.8C0 115.2 50.52 55.58 119.4 44.09v.01zM272 125.3v310.9L442.6 277c23.8-22.3 37.4-53.4 37.4-86.1v-5.8c0-54.2-39.2-100.52-92.7-109.44-36.2-5.89-71.4 5.65-96.7 30.94L272 125.3zM256.2 448h-1.1 1.1zm-17.1-322.7-17.7-18.7c-25.3-25.29-61.4-36.83-96.7-30.94-53.49 8.92-93.6 55.24-93.6 109.44v5.8c0 32.7 14.45 63.8 38.32 86.1L239.1 436.2V125.3z" />
  </svg>
);

const SvgHeartHalfStroke = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgHeartHalfStroke;
