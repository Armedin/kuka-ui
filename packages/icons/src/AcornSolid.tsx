import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M.001 160zM224 480c47.05-22.87 176-82.13 176-255.1H48c0 173 128.1 232.2 176 255.1zm223.1-320zM352 64.04l-100.5.002c3.375-9.373 8.5-18.12 15.12-25.1C272.3 31.54 272 22.04 265.1 16.17L253.85 4.8c-3.125-3.125-7.75-5.125-12-4.75-4.375.25-8.5 2.125-11.38 5.375-14.75 16.75-24.5 36.1-29.38 58.62L96 64.04C43.01 64.04.01 107.02.9 160.01.005 177.6 14.38 192 32 192h384c17.62 0 31.1-14.37 31.1-31.98 0-53.02-43-95.98-95.1-95.98z" />
  </svg>
);

const SvgAcornSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgAcornSolid;
