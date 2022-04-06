import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M192 256v-64h48c17.7 0 32 14.3 32 32s-14.3 32-32 32h-48zM384 32c35.3 0 64 28.65 64 64v320c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64V96c0-35.35 28.65-64 64-64h320zm-48 192c0-53.9-43-96-96-96h-72c-22.1 0-40 17.9-40 40v184c0 17.7 14.3 32 32 32s32-14.3 32-32v-32h48c53 0 96-43 96-96z" />
  </svg>
);

const SvgSquareParkingSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgSquareParkingSolid;
