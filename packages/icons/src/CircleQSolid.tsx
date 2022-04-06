import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M256 176c-44.1 0-80 35.9-80 80s35.88 80 80 80c13.31 0 25.67-3.576 36.72-9.344l-29.69-29.69c-9.375-9.375-9.375-24.56 0-33.94s24.56-9.375 33.94 0l29.69 29.69C332.4 281.7 336 269.3 336 256c0-44.1-35.9-80-80-80zm0-176C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm120.1 343c9.375 9.375 9.375 24.56 0 33.94-3.8 4.76-9.9 7.06-16.1 7.06s-12.28-2.344-16.97-7.031l-15.15-15.15C307.4 375.8 282.6 384 256 384c-70.59 0-128-57.42-128-128s57.41-128 128-128 128 57.42 128 128c0 26.63-8.211 51.37-22.19 71.88L376.1 343z" />
  </svg>
);

const SvgCircleQSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCircleQSolid;
