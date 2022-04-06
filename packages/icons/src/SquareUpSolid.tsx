import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M384 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h320c35.35 0 64-28.65 64-64V96c0-35.35-28.7-64-64-64zm-33.2 214.1c-2.5 6-8.3 9.9-14.8 9.9h-64v96c0 17.67-14.33 32-32 32h-32c-17.67 0-32-14.33-32-32v-96h-64c-6.5 0-12.31-3.9-14.78-9.9-2.49-6-1.11-12.8 3.48-17.4l112-112c6.248-6.248 16.38-6.248 22.62 0l112 112c4.58 4.6 5.98 11.4 3.48 17.4z" />
  </svg>
);

const SvgSquareUpSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgSquareUpSolid;
