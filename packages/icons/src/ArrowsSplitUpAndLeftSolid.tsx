import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M246.6 150.6c-12.5 12.5-32.7 12.5-45.2 0s-12.5-32.7 0-45.2l96-96.028c12.5-12.496 32.7-12.496 45.2 0l96 96.028c12.5 12.5 12.5 32.7 0 45.2s-32.7 12.5-45.2 0L352 109.3V384c0 35.3 28.7 64 64 64h64c17.7 0 32 14.3 32 32s-14.3 32-32 32h-64c-70.7 0-128-57.3-128-128 0-35.3-28.7-64-64-64H109.3l41.3 41.4c12.5 12.5 12.5 32.7 0 45.2s-32.7 12.5-45.2 0l-96.02-96h-.075C3.575 304.8.025 296.9 0 288.1l2.428-12.3c1.562-4.7 3.877-7.4 6.944-10.4l96.028-96c12.5-12.5 32.7-12.5 45.2 0s12.5 32.7 0 45.2l-41.3 40.5H224c23.3 0 45.2 7.1 64 18V109.3l-41.4 41.3zM0 287.9c.013-4.3.875-8.4 2.428-12.1-1.607 3.8-2.416 8-2.428 12.1zm0 .2v-1 1z" />
  </svg>
);

const SvgArrowsSplitUpAndLeftSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgArrowsSplitUpAndLeftSolid;
