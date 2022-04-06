import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M446.8 41.89a16 16 0 0 0-8.66-8.66 16.081 16.081 0 0 0-6.129-1.23H304c-8.8 0-16 7.16-16 16s7.2 16 16 16h89.38l-104.8 104.8C258.1 143.3 218.8 128 176 128 78.8 128 0 206.8 0 304s78.8 176 176 176 176-78.8 176-176c0-42.84-15.34-82.08-40.78-112.6L416 86.63V176c0 8.8 7.2 16 16 16s16-7.2 16-16V48c0-2.08-.4-4.15-1.2-6.11zM320 304c0 79.4-64.6 144-144 144S32 383.4 32 304s64.6-144 144-144 144 64.6 144 144z" />
  </svg>
);

const SvgMars = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgMars;
