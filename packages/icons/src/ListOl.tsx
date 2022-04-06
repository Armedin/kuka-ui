import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M64 48.04c0-8.84 7.16-16 16-16h32c8.8 0 16 7.16 16 16V192h32c8.8 0 16 7.2 16 16 0 8.9-7.2 16-16 16H64c-8.84 0-16-7.1-16-16 0-8.8 7.16-16 16-16h32V64.04H80c-8.84 0-16-7.17-16-16zM224 96c0-8.84 7.2-16 16-16h288c8.8 0 16 7.16 16 16 0 8.8-7.2 16-16 16H240c-8.8 0-16-7.2-16-16zm0 160c0-8.8 7.2-16 16-16h288c8.8 0 16 7.2 16 16s-7.2 16-16 16H240c-8.8 0-16-7.2-16-16zm0 160c0-8.8 7.2-16 16-16h288c8.8 0 16 7.2 16 16s-7.2 16-16 16H240c-8.8 0-16-7.2-16-16zM75.31 339.3c-6.24 6.3-16.37 6.3-22.62 0-6.25-6.2-6.25-16.4 0-22.6l15.41-15.4c24.18-24.2 63.8-22.9 86.3 2.8 20 22 19.4 57.1-1.3 79.3L92.82 448H160c8.8 0 16 7.2 16 16s-7.2 16-16 16H56c-6.37 0-12.13-3.8-14.67-9.6-2.54-5.9-1.37-12.7 2.97-17.3l85.4-91.5c9.5-10.2 9.8-25.9.6-36.4-11.2-11.8-28.5-12.4-39.57-1.3l-15.42 15.4z" />
  </svg>
);

const SvgListOl = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgListOl;
