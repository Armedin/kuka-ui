import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M384 32c35.3 0 64 28.65 64 64v320c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64V96c0-35.35 28.65-64 64-64h320zM80 384c-8.84 0-16 7.2-16 16s7.16 16 16 16h288c8.8 0 16-7.2 16-16s-7.2-16-16-16H80zm208-192v112c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V192h22.6c9.6 0 17.4-7.8 17.4-17.4 0-4.2-1.6-8.4-4.4-11.5l-54.3-62c-3.4-2.92-8.2-5.1-13.3-5.1-5.1 0-9.9 2.18-13.3 5.1l-54.3 62c-2.8 3.1-4.4 7.3-4.4 11.5 0 9.6 7.8 17.4 17.4 17.4H288zm-192 0v112c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V192h22.6c9.6 0 17.4-7.8 17.4-17.4 0-4.2-1.6-8.4-4.4-11.5l-54.3-62c-3.4-2.92-8.2-5.1-13.3-5.1-5.1 0-9.9 2.18-13.3 5.1l-54.31 62c-2.83 3.1-4.39 7.3-4.39 11.5 0 9.6 7.79 17.4 17.39 17.4H96z" />
  </svg>
);

const SvgSquareThisWayUpSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgSquareThisWayUpSolid;
