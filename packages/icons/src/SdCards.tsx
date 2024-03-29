import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M240 64c-8.8 0-16 7.16-16 16v64c0 8.8 7.2 16 16 16s16-7.2 16-16V80c0-8.84-7.2-16-16-16zm64 0c-8.8 0-16 7.16-16 16v64c0 8.8 7.2 16 16 16s16-7.2 16-16V80c0-8.84-7.2-16-16-16zm64 0c-8.8 0-16 7.16-16 16v64c0 8.8 7.2 16 16 16s16-7.2 16-16V80c0-8.84-7.2-16-16-16zm-32 416H96c-35.35 0-64-28.65-64-64V112c0-8.8-7.16-16-16-16s-16 7.2-16 16v304c0 53.02 42.98 96 96 96h240c8.836 0 16-7.164 16-16s-7.2-16-16-16zM384 0H234.5c-17 0-33.2 6.742-45.2 18.74L98.75 109.3C86.74 121.3 80 137.5 80 154.5V368c0 35.2 28.8 64 64 64h240c35.2 0 64-28.8 64-64V64c0-35.2-28.8-64-64-64zm32 368c0 17.6-14.4 32-32 32H144c-17.6 0-32-14.4-32-32V154.5a32.02 32.02 0 0 1 9.373-22.63l90.5-90.5C217.9 35.37 226 32 234.5 32H384c17.6 0 32 14.4 32 32v304z" />
  </svg>
);

const SvgSdCards = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgSdCards;
