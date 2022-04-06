import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M192 0C94.8 0 16 32.75 16 73.14v365.7C16 479.3 94.8 512 192 512s176-32.75 176-73.14V73.14C368 32.75 289.2 0 192 0zm0 45.6c61.86 0 112 11.28 112 25.2S253.9 96 192 96 80 84.72 80 70.8s50.1-25.2 112-25.2zM224 288c0 17.67-14.33 32-32 32s-32-14.3-32-32c0-17.67 14.33-32 32-32s32 14.3 32 32zM80 427.5V293.7c10.42 3.42 21.48 6.514 33.49 9.029C120.4 339.8 152.9 368 192 368c39.06 0 71.56-28.19 78.51-65.27 11.99-2.53 23.09-5.63 33.49-9.03v133.8c-20.3 9.6-57.4 20.5-112 20.5s-91.7-10.9-112-20.5z" />
  </svg>
);

const SvgCanFoodSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCanFoodSolid;
