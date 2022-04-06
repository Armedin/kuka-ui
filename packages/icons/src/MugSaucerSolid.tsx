import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M512 32H120c-13.25 0-24 10.75-24 24l.01 232c0 53 43 96 96 96h192C437 384 480 341 480 288h32c70.63 0 128-57.38 128-128S582.6 32 512 32zm0 192h-32V96h32c35.25 0 64 28.75 64 64s-28.7 64-64 64zm48 192H16c-8.836 0-16 7.2-16 16 0 26.5 21.49 48 48 48h480c26.51 0 48-21.49 48-48 0-8.8-7.2-16-16-16z" />
  </svg>
);

const SvgMugSaucerSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgMugSaucerSolid;
