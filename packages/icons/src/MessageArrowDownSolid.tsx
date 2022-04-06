import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M448 0H64C28.75 0 0 28.75 0 63.1v287.1c0 35.25 28.75 63.1 64 63.1h96v83.1c0 9.75 11.25 15.45 19.12 9.7l124.88-91h144c35.25 0 64-28.75 64-63.1V63.1C512 28.75 483.3 0 448 0zm-97.4 224.1-80 80c-9.375 9.375-24.56 9.375-33.94 0l-80-80c-9.375-9.375-9.375-24.56 0-33.94 4.74-3.86 10.84-6.16 17.04-6.16s12.28 2.344 16.97 7.031l39.03 39.03V128c0-13.25 10.75-24 24-24s24 10.75 24 24v102.1l39.03-39.03c9.375-9.375 24.56-9.375 33.94 0s8.43 24.53-.07 33.03z" />
  </svg>
);

const SvgMessageArrowDownSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgMessageArrowDownSolid;
