import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="m113.1 328.5 55.01 172-85.87-42.95c-10.53-5.281-23.38-18.09-28.62-28.62L6.75 333.5A64.141 64.141 0 0 1 0 304.9v-90.3l113.1 113.9zm18.1-28L7.531 176.9l51.44-102.8L240 139.3v106.9l-108.8 54.3zM256 111 89.72 51.13l88.77-44.37A64.091 64.091 0 0 1 207.1 0h97.78c8.344 0 21.17 3.031 28.61 6.75l88.78 44.37L256 111zm108.6 217.2L305.8 512h-99.6l-58.81-183.8L256 273.9l108.6 54.3zM272 139.3l181-65.19 51.44 102.8-123.6 123.6L272 246.1V139.3zm240 75.3v90.3c0 8.344-3.031 21.16-6.75 28.62l-47.73 95.38c-5.25 10.53-18.09 23.38-28.62 28.62l-85.87 42.95 55.01-172L512 214.6z" />
  </svg>
);

const SvgDiceD12Solid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgDiceD12Solid;
