import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M384 48v464L192 400 0 512V48C0 21.5 21.5 0 48 0h288c26.5 0 48 21.5 48 48z" />
  </svg>
);

const SvgBookmarkSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgBookmarkSolid;
