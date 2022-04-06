import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M62.96 32H64c59.1.36 115.6 31.39 147.4 82.3l7.2 11.5c38.2 61.1 105.2 98.2 177.2 98.2 28.8 0 52.2-23.4 52.2-52.2V136c0-22.1 17.9-40 40-40h104c8.8 0 16 7.2 16 16s-7.2 16-16 16h-16v128c0 70.7-57.3 128-128 128v64h120c22.1 0 40-17.9 40-40v-24c0-8.8 7.2-16 16-16s16 7.2 16 16v24c0 39.8-32.2 72-72 72H48c-8.84 0-16-7.2-16-16s7.16-16 16-16h80v-68.9C72.79 365.8 32 315.6 32 256V64H16C7.164 64 0 56.84 0 48s7.164-16 16-16h46.96zM416 448v-64H160v64h256zm64-312v35.8c0 46.5-37.7 84.2-84.2 84.2-83.1 0-160.3-42.8-204.3-113.2l-7.2-11.6C158.3 89.71 112.9 64.36 64 64v192c0 53 42.1 96 96 96h288c53 0 96-43 96-96V128h-56c-4.4 0-8 3.6-8 8z" />
  </svg>
);

const SvgSleigh = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgSleigh;
