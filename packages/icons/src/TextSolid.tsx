import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M448 64.01v64c0 17.69-14.31 32-32 32s-32-14.31-32-32v-32H256v320h48c17.69 0 32 14.31 32 32s-14.31 31.1-32 31.1H144c-17.69 0-32-14.31-32-31.1s14.31-32 32-32h48v-320H64v32c0 17.69-14.31 32-32 32s-32-14.31-32-32v-64c0-17.69 14.31-32 32-32h384c17.7 0 32 14.32 32 32z" />
  </svg>
);

const SvgTextSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgTextSolid;
