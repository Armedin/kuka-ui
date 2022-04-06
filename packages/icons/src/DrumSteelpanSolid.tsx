import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M288 32C129 32 0 89.25 0 160v192c0 70.75 129 128 288 128s288-57.25 288-128V160c0-70.75-129-128-288-128zm-83 158.4c-4.5 16.62-14.5 30.5-28.25 40.5C100.2 217.5 48 190.8 48 160c0-30.12 50.12-56.38 124-69.1l25.62 44.25c9.88 16.25 12.48 36.05 7.38 55.25zm83 49.6c-21.12 0-41.38-.1-60.88-2.75C235.1 211.1 259.2 192 288 192s52.88 19.12 60.88 45.25A679.813 679.813 0 0 1 288 240zm64-144c0 35.25-28.75 64-64 64s-64-28.8-64-64V83c20.4-1.88 41.8-3 64-3s43.63 1.125 64 3v13zm46.9 134.9c-13.75-9.875-23.88-23.88-28.38-40.5-5.125-19.13-2.5-39 7.375-56l25.62-44.5C477.8 103.5 528 129.8 528 160c0 30.9-52.4 57.5-129.1 70.9z" />
  </svg>
);

const SvgDrumSteelpanSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgDrumSteelpanSolid;
