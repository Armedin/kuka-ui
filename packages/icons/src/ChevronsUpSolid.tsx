import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M54.63 278.6 224 109.3l169.4 169.4c6.2 6.2 14.4 9.3 22.6 9.3s16.38-3.125 22.62-9.375c12.5-12.5 12.5-32.75 0-45.25l-192-192c-12.5-12.5-32.75-12.5-45.25 0l-192 192c-12.5 12.5-12.5 32.75 0 45.25s32.76 12.475 45.26-.025zm191.97-45.2c-12.5-12.5-32.75-12.5-45.25 0l-192 192c-12.5 12.5-12.5 32.75 0 45.25s32.75 12.5 45.25 0L224 301.3l169.4 169.4c6.2 6.2 14.4 9.3 22.6 9.3s16.38-3.125 22.62-9.375c12.5-12.5 12.5-32.75 0-45.25L246.6 233.4z" />
  </svg>
);

const SvgChevronsUpSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgChevronsUpSolid;
