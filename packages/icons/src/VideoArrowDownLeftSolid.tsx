import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M336 64H48C21.49 64 0 85.49 0 112v288c0 26.5 21.49 48 48 48h288c26.51 0 48-21.49 48-48V112c0-26.51-21.5-48-48-48zm-39.9 120.1-135 135H216c13.25 0 24 10.75 24 23.1s-10.75 24-24 24H104c-13.25 0-24-10.75-24-24v-112c0-13.25 10.75-24 24-24s24 12.6 24 25.8v54.06l135-135c4.7-4.66 10.8-7.06 17-7.06s12.28 2.344 16.97 7.031c9.33 9.369 9.33 24.569-.87 33.069zm229.5-82.3L416 177.3v157.4l109.6 75.49c21.2 14.61 50.4-.29 50.4-25.79V127.5c0-25.4-29.1-40.36-50.4-25.7z" />
  </svg>
);

const SvgVideoArrowDownLeftSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgVideoArrowDownLeftSolid;
