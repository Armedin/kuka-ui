import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M224 128V0H48C21.49 0 0 21.49 0 48v416c0 26.5 21.49 48 48 48h288c26.51 0 48-21.49 48-48V160H256.9c-18.6 0-32.9-14.3-32.9-32zm88.1 279c9.375 9.375 9.375 24.56 0 33.94-3.8 4.76-9.9 7.06-16.1 7.06s-12.28-2.344-16.97-7.031l-48.67-48.67C214.5 402.1 195.1 408 176 408c-57.44 0-104-46.56-104-104s46.6-104 104-104 104 46.56 104 104c0 20-5.922 38.5-15.71 54.36L312.1 407zM256 0v128h128L256 0zm-80 248c-30.88 0-56 25.12-56 56s25.12 56 56 56 56-25.12 56-56c0-30.9-25.1-56-56-56z" />
  </svg>
);

const SvgFileMagnifyingGlassSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgFileMagnifyingGlassSolid;
