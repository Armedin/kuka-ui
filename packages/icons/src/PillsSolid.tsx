import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M112 32C50.12 32 0 82.12 0 143.1v223.1c0 61.88 50.12 111.1 112 111.1s112-50.12 112-111.1V143.1C224 82.12 173.9 32 112 32zm48 224H64V144c0-26.5 21.5-48 48-48s48 21.5 48 48v112zm139.8-29.8c-3.5-3.5-9.5-3-12.38.875-45.25 62.5-40.38 150.1 15.88 206.4 56.38 56.25 144 61.25 206.5 15.88 4-2.875 4.249-8.75.75-12.25L299.8 226.2zm229.7-19c-56.25-56.25-143.9-61.13-206.4-15.87-4 2.875-4.375 8.875-.875 12.38l210.9 210.7c3.5 3.5 9.375 3.125 12.25-.75C590.8 351.1 585.9 263.6 529.5 207.2z" />
  </svg>
);

const SvgPillsSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgPillsSolid;
