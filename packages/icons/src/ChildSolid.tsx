import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" {...props}>
    <path d="M224 64c0 35.35-28.7 64-64 64S96 99.35 96 64s28.7-64 64-64 64 28.65 64 64zm-80 320v96c0 17.7-14.3 32-32 32-17.67 0-31.99-14.3-31.99-32V287.8L59.09 321c-9.42 15-29.17 19.5-44.13 10.1-14.958-9.4-19.451-29.2-10.036-45l39.866-62.5C69.72 184 113.2 160 160 160s90.3 24 115.2 63.6l39.9 62.5c9.4 15.8 4.9 35.6-10 45-15 9.4-34.8 4.9-44.2-10.1L240 287.8V480c0 17.7-14.3 32-32 32s-32-14.3-32-32v-96h-32z" />
  </svg>
);

const SvgChildSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgChildSolid;
