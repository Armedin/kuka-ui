import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M464 96H272l-64-64H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V144c0-26.5-21.5-48-48-48zM352.1 304.1c-3.8 5.6-9.9 7.9-16.1 7.9s-12.28-2.344-16.97-7.031L280 265.9V376c0 13.25-10.75 24-24 24s-24-10.75-24-24V265.9l-39.9 38.2c-9.375 9.375-24.56 9.375-33.94 0s-9.375-24.56 0-33.94l80-80c9.375-9.375 24.56-9.375 33.94 0l80 80c10.2 10.24 10.2 25.44 0 33.94z" />
  </svg>
);

const SvgFolderArrowUpSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgFolderArrowUpSolid;
