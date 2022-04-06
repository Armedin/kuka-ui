import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M464 96H272l-64-64H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V144c0-26.5-21.5-48-48-48zM176 320c0 8.836-7.162 16-16 16H96c-8.836 0-16-7.164-16-16v-64c0-8.836 7.164-16 16-16h64c8.838 0 16 7.164 16 16v64zm128 0c0 8.836-7.162 16-16 16h-64c-8.836 0-16-7.164-16-16v-64c0-8.836 7.164-16 16-16h64c8.838 0 16 7.164 16 16v64zm128 0c0 8.836-7.162 16-16 16h-64c-8.836 0-16-7.164-16-16v-64c0-8.836 7.164-16 16-16h64c8.838 0 16 7.164 16 16v64z" />
  </svg>
);

const SvgFolderGridSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgFolderGridSolid;
