import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M354.1 64c-5.6 0-10.8 2.95-13.7 7.77L263 200.7c-8.6 14.5-24.3 23.3-41.1 23.3H16c-8.836 0-16-7.2-16-16s7.164-16 16-16h205.9c5.6 0 10.8-2.9 13.7-7.8l76.5-128.9c9.5-14.45 25.2-23.3 42-23.3H560c8.8 0 16 7.16 16 16s-7.2 16-16 16H354.1zM201.7 320l74.5 120.4c2.9 4.7 8.1 7.6 13.6 7.6H560c8.8 0 16 7.2 16 16s-7.2 16-16 16H289.8c-16.6 0-32-8.6-40.8-22.7L164 320H16c-8.836 0-16-7.2-16-16s7.164-16 16-16h164.9l.7-.4.3.4H560c8.8 0 16 7.2 16 16s-7.2 16-16 16H201.7z" />
  </svg>
);

const SvgDiagramSankey = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgDiagramSankey;
