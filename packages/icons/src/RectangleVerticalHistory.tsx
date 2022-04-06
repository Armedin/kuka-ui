import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M192 64c0-35.35 28.7-64 64-64h256c35.3 0 64 28.65 64 64v384c0 35.3-28.7 64-64 64H256c-35.3 0-64-28.7-64-64V64zm32 0v384c0 17.7 14.3 32 32 32h256c17.7 0 32-14.3 32-32V64c0-17.67-14.3-32-32-32H256c-17.7 0-32 14.33-32 32zM96 64c0-8.84 7.2-16 16-16s16 7.16 16 16v384c0 8.8-7.2 16-16 16s-16-7.2-16-16V64zM0 112c0-8.8 7.164-16 16-16 8.84 0 16 7.2 16 16v288c0 8.8-7.16 16-16 16-8.836 0-16-7.2-16-16V112z" />
  </svg>
);

const SvgRectangleVerticalHistory = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgRectangleVerticalHistory;
