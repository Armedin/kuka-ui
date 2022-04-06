import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M96 384h448V128H96v256zM32 96c-17.66 0-32 14.3-32 32v256c0 17.66 14.34 32 32 32s32-14.34 32-32V128c0-17.7-14.34-32-32-32zm576 0c-17.66 0-32 14.34-32 32v256c0 17.66 14.34 32 32 32s32-14.34 32-32V128c0-17.7-14.3-32-32-32z" />
  </svg>
);

const SvgPipeSectionSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgPipeSectionSolid;
