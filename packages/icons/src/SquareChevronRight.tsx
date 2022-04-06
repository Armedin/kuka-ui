import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M180.7 155.3 281.4 256 180.7 356.7c-6.25 6.25-6.25 16.38 0 22.62s16.38 6.25 22.62 0l112-112C318.4 264.2 320 260.1 320 256s-1.562-8.188-4.688-11.31l-112-112c-6.25-6.25-16.38-6.25-22.62 0s-6.292 16.41.008 22.61zM0 96v320c0 35.35 28.65 64 64 64h320c35.35 0 64-28.65 64-64V96c0-35.35-28.65-64-64-64H64C28.65 32 0 60.65 0 96zm384-32c17.64 0 32 14.36 32 32v320c0 17.64-14.36 32-32 32H64c-17.64 0-32-14.36-32-32V96c0-17.64 14.36-32 32-32h320z" />
  </svg>
);

const SvgSquareChevronRight = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgSquareChevronRight;
