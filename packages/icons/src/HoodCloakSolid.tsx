import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M288.2 192c-70.62 0-128 57.25-128 128l.066 192h255.1l-.06-192C416.2 249.2 358.9 192 288.2 192zm281.4 268.8c-57.62-77-57.62-140.9-57.62-140.9v-64c0-84-46.42-122.1-101.2-182.8l39.77-39.75c12.37-12.38 3.625-33.5-13.87-33.5H287.6c-95.62 0-223.6 109.5-223.6 256v64s-.025 63.85-57.65 140.9C1.865 466.7-.12 473.5.005 479.1c.25 16.5 13.48 32 32.36 32l95.935.9V320c0-88.25 71.75-160 159.1-160s159.1 71.75 159.1 160v192h95.38c18.87 0 32.11-15.5 32.36-32 1.86-6.5-.14-13.3-4.64-19.2z" />
  </svg>
);

const SvgHoodCloakSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgHoodCloakSolid;
