import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M64 64c17.67 0 32 14.33 32 32 0 17.7-14.33 32-32 32s-32-14.3-32-32c0-17.67 14.33-32 32-32zm432 16c8.8 0 16 7.16 16 16 0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16 0-8.84 7.2-16 16-16h320zm0 160c8.8 0 16 7.2 16 16s-7.2 16-16 16H176c-8.8 0-16-7.2-16-16s7.2-16 16-16h320zm0 160c8.8 0 16 7.2 16 16s-7.2 16-16 16H176c-8.8 0-16-7.2-16-16s7.2-16 16-16h320zM64 288c-17.67 0-32-14.3-32-32s14.33-32 32-32 32 14.3 32 32-14.33 32-32 32zm0 96c17.67 0 32 14.3 32 32s-14.33 32-32 32-32-14.3-32-32 14.33-32 32-32z" />
  </svg>
);

const SvgListUl = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgListUl;
