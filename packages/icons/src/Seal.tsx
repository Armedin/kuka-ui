import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M199.1 86.63c-6 6-15 9.37-22.6 9.37H112c-8.8 0-16 7.2-16 16v64.5c0 7.6-3.37 16.6-9.37 22.6l-45.59 45.6c-6.25 6.2-6.25 16.4 0 22.6l-22.63 22.6c-18.743-18.7-18.743-49.1 0-67.8L64 176.5V112c0-26.51 21.49-48 48-48h64.5l45.6-45.59c18.7-18.74 49.1-18.74 67.8 0L335.5 64H400c26.5 0 48 21.49 48 48v64.5l45.6 45.6c18.7 18.7 18.7 49.1 0 67.8L448 335.5V400c0 26.5-21.5 48-48 48h-64.5l-45.6 45.6c-18.7 18.7-49.1 18.7-67.8 0L176.5 448H112c-26.51 0-48-21.5-48-48v-64.5l-45.59-45.6 22.63-22.6 45.59 45.6c6 6 9.37 14.1 9.37 22.6V400c0 8.8 7.2 16 16 16h64.5c7.6 0 16.6 3.4 22.6 9.4l45.6 44.7c6.2 7.1 16.4 7.1 22.6 0l45.6-44.7c6-6 14.1-9.4 22.6-9.4H400c8.8 0 16-7.2 16-16v-64.5c0-8.5 3.4-16.6 9.4-22.6l44.7-45.6c7.1-6.2 7.1-16.4 0-22.6l-44.7-45.6c-6-6-9.4-15-9.4-22.6V112c0-8.8-7.2-16-16-16h-64.5c-8.5 0-16.6-3.37-22.6-9.37l-45.6-45.59c-6.2-6.25-16.4-6.25-22.6 0l-45.6 45.59z" />
  </svg>
);

const SvgSeal = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgSeal;
