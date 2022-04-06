import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M240 64c-8.8 0-16 7.16-16 16v64c0 8.8 7.2 16 16 16s16-7.2 16-16V80c0-8.84-7.2-16-16-16zm-64 0c-8.8 0-16 7.16-16 16v64c0 8.8 7.2 16 16 16s16-7.2 16-16V80c0-8.84-7.2-16-16-16zm128 0c-8.8 0-16 7.16-16 16v64c0 8.8 7.2 16 16 16s16-7.2 16-16V80c0-8.84-7.2-16-16-16zm16-64H154.5c-17 0-33.2 6.742-45.2 18.74L18.75 109.3C6.742 121.3 0 137.5 0 154.5V448c0 35.2 28.8 64 64 64h256c35.2 0 64-28.8 64-64V64c0-35.2-28.8-64-64-64zm32 448c0 17.6-14.4 32-32 32H64c-17.6 0-32-14.4-32-32V154.5a32.02 32.02 0 0 1 9.373-22.63l90.5-90.5C137.9 35.37 146 32 154.5 32H320c17.6 0 32 14.4 32 32v384z" />
  </svg>
);

const SvgSdCard = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgSdCard;
