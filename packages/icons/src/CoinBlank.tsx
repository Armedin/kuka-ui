import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M512 208v112c0 70.7-114.6 128-256 128S0 390.7 0 320V208C0 128.5 114.6 64 256 64s256 64.5 256 144zM90.67 281.9C131.4 304.8 189.8 320 256 320c66.2 0 124.6-15.2 165.3-38.1C463 258.5 480 231.1 480 208c0-23.1-17-50.5-58.7-73.9C380.6 111.2 322.2 96 256 96c-66.2 0-124.6 15.2-165.33 38.1C48.96 157.5 32 184.9 32 207.1c0 24 16.96 51.4 58.67 74.8zM240 351.7c-22.2-1.6-43.7-3.1-64-6.9v64.4c20 3.5 41.5 4.9 64 6.5v-64zM96 385.1c14.2 6.6 30.3 12.3 48 17v-64.6c-17.2-4.7-33.2-10.4-48-17.1v64.7zm-32-81.9c-12.22-7.7-22.97-16.3-32-25.4V320c0 12.9 8.51 29.9 32 46.8v-63.6zm272 106v-64.4c-20.3 3.8-41.8 5.3-64 6.9v64c22.5-1.6 43.1-3 64-6.5zm112-42.4c23.5-16.9 32-33.9 32-46.8v-42.2c-9.9 9.1-19.8 17.7-32 25.4v63.6zm-32-46.4c-14.7 6.7-30.8 12.4-48 17.1v64.6c17.7-4.7 33.8-10.4 48-17v-64.7z" />
  </svg>
);

const SvgCoinBlank = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCoinBlank;