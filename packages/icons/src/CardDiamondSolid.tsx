import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M0 64C0 28.65 28.65 0 64 0h256c35.3 0 64 28.65 64 64v384c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64V64zm84.69 180.7c-6.25 6.2-6.25 16.4 0 22.6l96.01 96c6.2 6.3 16.4 6.3 22.6 0l96-96c6.3-6.2 6.3-16.4 0-22.6l-96-96c-6.2-6.3-16.4-6.3-22.6 0l-96.01 96z" />
  </svg>
);

const SvgCardDiamondSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCardDiamondSolid;
