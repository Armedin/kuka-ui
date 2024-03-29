import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M320 95.1c17.67 0 32-14.33 32-32s-14.33-32-32-32-32 14.33-32 32 14.3 32 32 32zm-96 0c17.67 0 32-14.33 32-32s-14.33-32-32-32-32 14.33-32 32 14.3 32 32 32zm192 0c17.67 0 32-14.33 32-32s-14.33-32-32-32-32 14.33-32 32 14.3 32 32 32zm-41.4 186.3-128-128c-12.5-12.5-32.75-12.5-45.25 0l-128 128c-12.5 12.5-12.5 32.75 0 45.25s32.75 12.5 45.25 0L192 253.3V432c0 17.69 14.31 32 32 32s32-14.31 32-32V253.3l73.38 73.38C335.6 332.9 343.8 336 352 336s16.38-3.125 22.62-9.375C387.1 314.1 387.1 293.9 374.6 281.4zM128 95.1c17.67 0 32-14.33 32-32s-14.33-32-32-32-32 14.33-32 32 14.3 32 32 32zm-96 0c17.67 0 32-14.33 32-32s-14.33-32-32-32-32 14.33-32 32 14.33 32 32 32z" />
  </svg>
);

const SvgArrowUpToDottedLineSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgArrowUpToDottedLineSolid;
