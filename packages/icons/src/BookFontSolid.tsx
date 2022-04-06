import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M448 336V48c0-26.51-21.5-48-48-48H96C42.98 0 0 42.98 0 96v320c0 53.02 42.98 96 96 96h320c17.67 0 32-14.33 32-31.1 0-11.72-6.607-21.52-16-27.1v-81.36c9.8-9.64 16-22.24 16-36.44zm-318.3-71.2 96-192c5.438-10.84 23.19-10.84 28.62 0l96 192c3.953 7.906.75 17.52-7.156 21.47C340.9 287.5 338.4 288 336 288c-5.875 0-11.52-3.234-14.33-8.844L294.1 224H185.9l-27.6 55.2c-3.9 7.9-13.6 11-21.5 7.1-7.9-3.9-11.1-13.5-7.1-21.5zM384 448H96c-17.67 0-32-14.33-32-32s14.33-32 32-32h288v64zM239.1 115.8 201.9 192h76.22l-39.02-76.2z" />
  </svg>
);

const SvgBookFontSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgBookFontSolid;
