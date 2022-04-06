import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M335.5 64H400c26.5 0 48 21.49 48 48v64.5l45.6 45.6c18.7 18.7 18.7 49.1 0 67.8L448 335.5V400c0 26.5-21.5 48-48 48h-64.5l-45.6 45.6c-18.7 18.7-49.1 18.7-67.8 0L176.5 448H112c-26.51 0-48-21.5-48-48v-64.5l-45.59-45.6c-18.743-18.7-18.743-49.1 0-67.8L64 176.5V112c0-26.51 21.49-48 48-48h64.5l45.6-45.59c18.7-18.74 49.1-18.74 67.8 0L335.5 64z" />
  </svg>
);

const SvgSealSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgSealSolid;
