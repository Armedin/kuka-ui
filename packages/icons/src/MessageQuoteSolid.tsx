import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M447.1.004h-384c-35.25 0-64 28.75-64 63.1v287.1c0 35.25 28.75 63.1 64 63.1h96v83.98c0 9.75 11.25 15.45 19.12 9.7l124.9-93.68h144c35.25 0 64-28.75 64-63.1V63.1C511.1 28.75 483.2.004 447.1.004zM239.1 232c0 39.7-32.3 71.1-71.1 71.1-13.3 0-24-9.8-24-23.1s10.8-24 24-24 24-10.8 24-24v-8.8c-2.6.4-5.3.8-8.9.8-30.93 0-56-25.07-56-55.1s25.07-55.1 56-55.1 56 23.3 56 54.2v64zm144 0c0 39.7-32.3 71.1-72 71.1-12.4 0-23.1-9.8-23.1-23.1s10.8-24 24-24c13.23 0 24-10.77 24-24v-8.8c-2.635.38-5.269.807-8.01.807-30.93 0-56-25.07-56-55.1s25.07-55.1 56-55.1 56 25.07 56 55.1L383.1 232z" />
  </svg>
);

const SvgMessageQuoteSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgMessageQuoteSolid;
