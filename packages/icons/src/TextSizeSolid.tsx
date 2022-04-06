import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M256 416h-32V96h96v32c0 17.69 14.33 32 32 32s32-14.31 32-32V64c0-17.69-14.33-32-32-32H32C14.33 32 0 46.31 0 64v64c0 17.69 14.33 32 32 32s32-14.31 32-32V96h96v320h-32c-17.67 0-32 14.31-32 32s14.33 32 32 32h128c17.67 0 32-14.31 32-32s-14.3-32-32-32zm352-192H352c-17.67 0-32 14.31-32 31.1v32c0 17.69 14.33 32 32 32s32-14.31 32-32h64v128h-16c-17.67 0-32 14.31-32 32s14.33 32 32 32h96c17.67 0 32-14.31 32-32s-14.33-32-32-32h-16v-128h64c0 17.69 14.33 32 32 32s32-14.31 32-32v-32c0-16.8-14.3-31.1-32-31.1z" />
  </svg>
);

const SvgTextSizeSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgTextSizeSolid;
