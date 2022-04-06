import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M64 480h320c35.35 0 64-28.65 64-64V96c0-35.35-28.65-64-64-64H64C28.65 32 0 60.65 0 96v320c0 35.3 28.65 64 64 64zm33.22-214.1c2.47-6 8.28-9.9 14.78-9.9h64v-96c0-17.67 14.33-32 32-32h32c17.67 0 32 14.33 32 32v96h64c6.469 0 12.31 3.891 14.78 9.875a15.988 15.988 0 0 1-3.469 17.44l-112 112c-6.248 6.248-16.38 6.248-22.62 0l-112-112C96.11 278.7 94.73 271.9 97.22 265.9z" />
  </svg>
);

const SvgSquareDownSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgSquareDownSolid;
