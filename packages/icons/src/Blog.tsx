import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M160 224c-8.8 0-16 7.2-16 16s7.2 16 16 16c52.94 0 96 43.06 96 96s-43.06 96-96 96-96-43.06-96-96V112c0-8.8-7.16-16-16-16s-16 7.2-16 16v240c0 70.58 57.41 128 128 128s128-57.42 128-128-57.4-128-128-128zm48-192c-8.8 0-16 7.16-16 16s7.2 16 16 16c132.3 0 240 107.7 240 240 0 8.844 7.156 16 16 16s16-7.2 16-16c0-150-122.9-272-272-272zm0 96c-8.8 0-16 7.2-16 16s7.2 16 16 16c79.4 0 144 64.6 144 144 0 8.844 7.156 16 16 16s16-7.2 16-16c0-97.9-79-176-176-176z" />
  </svg>
);

const SvgBlog = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgBlog;
