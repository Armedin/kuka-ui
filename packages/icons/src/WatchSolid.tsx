import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M272 0c26.5 0 48 21.49 48 48v24.15C283.7 46.84 239.6 32 192 32c-47.6 0-91.7 14.84-128 40.15V48c0-26.51 21.49-48 48-48h160zM64 464v-24.2c36.3 25.4 80.4 40.2 128 40.2 47.6 0 91.7-14.8 128-40.2V464c0 26.5-21.5 48-48 48H112c-26.51 0-48-21.5-48-48zm320-208c0 106-86 192-192 192C85.96 448 0 362 0 256 0 149.1 85.96 64 192 64c106 0 192 85.1 192 192zm-216-80v80c0 8 4 15.5 10.7 19.1l48 32c11 8.2 25.9 5.2 32.4-5.8 8.2-11 5.2-25.9-5.8-33.3L216 243.2V176c0-13.3-10.7-24-24.9-24-12.4 0-24 10.7-24 24h.9z" />
  </svg>
);

const SvgWatchSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgWatchSolid;
