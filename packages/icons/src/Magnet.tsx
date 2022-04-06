import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M0 80c0-26.51 21.49-48 48-48h48c26.5 0 48 21.49 48 48v176c0 44.2 35.8 80 80 80s80-35.8 80-80V80c0-26.51 21.5-48 48-48h48c26.5 0 48 21.49 48 48v176c0 123.7-100.3 224-224 224S0 379.7 0 256V80zm48-16c-8.84 0-16 7.16-16 16v48h80V80c0-8.84-7.2-16-16-16H48zm176 384c106 0 192-86 192-192v-96h-80v96c0 61.9-50.1 112-112 112s-112-50.1-112-112v-96H32v96c0 106 85.1 192 192 192zm192-320V80c0-8.84-7.2-16-16-16h-48c-8.8 0-16 7.16-16 16v48h80z" />
  </svg>
);

const SvgMagnet = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgMagnet;
