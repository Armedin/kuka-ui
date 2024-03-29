import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M384 64.01v384c0 17.67-14.33 32-32 32s-32-14.33-32-32v-192H64v192c0 17.67-14.33 32-32 32s-32-14.33-32-32v-384c0-17.67 14.33-32 32-32s32 14.33 32 32v128h256v-128c0-17.67 14.33-32 32-32s32 14.33 32 32z" />
  </svg>
);

const SvgHSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgHSolid;
