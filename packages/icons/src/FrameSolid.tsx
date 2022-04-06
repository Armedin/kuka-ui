import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M416 160h-32v192h32c17.7 0 32 14.3 32 32s-14.3 32-32 32h-32v32c0 17.7-14.3 32-32 32s-32-14.3-32-32v-32H128v32c0 17.7-14.3 32-32 32-17.67 0-32-14.3-32-32v-32H32c-17.67 0-32-14.3-32-32s14.33-32 32-32h32V160H32c-17.67 0-32-14.3-32-32s14.33-32 32-32h32V64c0-17.67 14.33-32 32-32 17.7 0 32 14.33 32 32v32h192V64c0-17.67 14.3-32 32-32s32 14.33 32 32v32h32c17.7 0 32 14.3 32 32s-14.3 32-32 32zM128 352h192V160H128v192z" />
  </svg>
);

const SvgFrameSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgFrameSolid;
