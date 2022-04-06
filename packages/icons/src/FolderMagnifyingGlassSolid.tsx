import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M240 216c-30.88 0-56 25.12-56 56s25.12 56 56 56 56-25.12 56-56c0-30.9-25.1-56-56-56zM464 96H272l-64-64H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V144c0-26.5-21.5-48-48-48zm-87.9 312.1c-3.8 5.6-9.9 7.9-16.1 7.9s-12.28-2.344-16.97-7.031l-48.67-48.67C278.5 370.1 259.1 376 240 376c-57.44 0-104-46.56-104-104s46.6-104 104-104 104 46.56 104 104c0 20-5.922 38.5-15.71 54.36l48.67 48.67c9.34 9.37 9.34 24.57-.86 33.07z" />
  </svg>
);

const SvgFolderMagnifyingGlassSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgFolderMagnifyingGlassSolid;
