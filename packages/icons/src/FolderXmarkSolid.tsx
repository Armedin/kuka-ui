import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M464 96H272l-64-64H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V144c0-26.5-21.5-48-48-48zM336.1 335c9.375 9.375 9.375 24.56 0 33.94-9.383 9.379-24.56 9.371-33.94 0L256 321.9l-47.03 47.03c-9.383 9.379-24.56 9.371-33.94 0-9.375-9.375-9.375-24.56 0-33.94L222.1 288 175 240.1c-9.375-9.375-9.375-24.56 0-33.94s24.56-9.375 33.94 0L256 254.1l47.03-47.03c9.375-9.375 24.56-9.375 33.94 0s9.375 24.56 0 33.94L289.9 288l46.2 47z" />
  </svg>
);

const SvgFolderXmarkSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgFolderXmarkSolid;
