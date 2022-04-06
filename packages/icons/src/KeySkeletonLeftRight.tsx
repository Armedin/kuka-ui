import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M639.1 128c0 70.7-56.4 128-128 128-69.8 0-128-57.3-128-128h-96v64c0 8.8-6.3 16-16 16-7.9 0-16-7.2-16-16v-64h-64v64c0 8.8-6.3 16-16 16-7.9-.9-16-7.2-16-16.9v-80c0-7.9 8.1-16 16-16H388C402.2 40.79 452.4 0 511.1 0c71.6 0 128 57.31 128 128zm-128-96c-53 0-96 42.98-96 96 0 53 43 96 96 96 53.9 0 96-43 96-96 0-53.02-42.1-96-96-96zM0 384c0-70.7 57.31-128 128-128 70.7 0 128 57.3 128 128h95.1v-64c0-8.8 8.1-16 16-16 9.7 0 16 7.2 16 16v64h64v-64c0-8.8 8.1-16 16.9-16 8.8 0 15.1 7.2 15.1 16v80c0 8.8-6.3 16-16 16h-212c-13.3 55.2-63.5 96-123.1 96C57.31 512 0 454.7 0 384zm128 96c53 0 96-43 96-96 0-53.9-43-96-96-96-53.02 0-96 42.1-96 96 0 53 42.98 96 96 96z" />
  </svg>
);

const SvgKeySkeletonLeftRight = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgKeySkeletonLeftRight;
