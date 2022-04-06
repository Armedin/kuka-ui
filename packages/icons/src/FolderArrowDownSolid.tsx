import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M464 96H272l-64-64H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V144c0-26.5-21.5-48-48-48zM159 271c4.7-4.7 10.8-7 17-7s12.28 2.344 16.97 7.031L232 310.1V200c0-13.2 10.8-24 24-24s24 10.75 24 24v110.1l39.03-39.03c9.375-9.375 24.56-9.375 33.94 0s9.375 24.56 0 33.94l-80 80c-9.375 9.375-24.56 9.375-33.94 0l-80-80c-9.33-9.41-9.33-24.61-.03-34.01z" />
  </svg>
);

const SvgFolderArrowDownSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgFolderArrowDownSolid;
