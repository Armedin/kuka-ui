import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" {...props}>
    <path d="M311.1 459.6 288 448v-16c0-8.875-7.125-16-16-16H48c-8.88 0-16 7.1-16 16v16L8.88 459.62C3.375 462.2 0 467.9 0 473.9V496c0 8.9 7.125 16 16 16h288c8.875 0 16-7.125 16-16v-22.12c0-5.98-3.4-11.68-8.9-14.28zM71.75 210.4 57.38 384h205.3L248.3 210.2l30.5-31c6-5.9 9.2-14.1 9.2-22.4V72c0-4.38-3.6-8-8-8h-35.13c-4.5 0-8 3.625-8 8v40h-33V72c0-4.375-3.625-8-8-8H124.1c-4.375 0-8 3.625-8 8v40H83.25V72c0-4.375-3.625-8-8-8H40c-4.38 0-8 3.62-8 8v84.88c0 8.375 3.25 16.37 9.25 22.37l30.5 31.15zm64.65 21.2c0-13.1 10.6-23.6 23.6-23.6s23.62 10.5 23.62 23.62v47.13H136.4V231.6z" />
  </svg>
);

const SvgChessRookPieceSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgChessRookPieceSolid;
