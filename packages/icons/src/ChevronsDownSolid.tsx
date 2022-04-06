import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M201.4 278.6c6.2 6.3 14.4 9.4 22.6 9.4s16.38-3.125 22.62-9.375l192-192c12.5-12.5 12.5-32.75 0-45.25s-32.75-12.5-45.25 0L224 210.8 54.63 41.38c-12.5-12.5-32.75-12.5-45.25 0s-12.5 32.75 0 45.25L201.4 278.6zm192-45.2L224 402.8 54.63 233.4c-12.5-12.5-32.75-12.5-45.25 0s-12.5 32.75 0 45.25l192 192C207.6 476.9 215.8 480 224 480s16.38-3.125 22.62-9.375l192-192c12.5-12.5 12.5-32.75 0-45.25s-32.72-12.475-45.22.025z" />
  </svg>
);

const SvgChevronsDownSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgChevronsDownSolid;
