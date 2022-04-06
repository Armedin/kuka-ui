import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M299.3 244.7c6.3 6.2 6.3 16.4 0 22.6l-96 96c-6.2 6.3-16.4 6.3-22.6 0l-96.01-96c-6.25-6.2-6.25-16.4 0-22.6l96.01-96c6.2-6.3 16.4-6.3 22.6 0l96 96zM265.4 256 192 182.6 118.6 256l73.4 73.4 73.4-73.4zM0 64C0 28.65 28.65 0 64 0h256c35.3 0 64 28.65 64 64v384c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64V64zm32 0v384c0 17.7 14.33 32 32 32h256c17.7 0 32-14.3 32-32V64c0-17.67-14.3-32-32-32H64c-17.67 0-32 14.33-32 32z" />
  </svg>
);

const SvgCardDiamond = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCardDiamond;
