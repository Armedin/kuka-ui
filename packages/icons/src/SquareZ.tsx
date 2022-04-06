import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M384 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h320c35.35 0 64-28.65 64-64V96c0-35.35-28.7-64-64-64zm32 384c0 17.64-14.36 32-32 32H64c-17.64 0-32-14.36-32-32V96c0-17.64 14.36-32 32-32h320c17.64 0 32 14.36 32 32v320zm-96-64H162.8l169.4-197.6c4.062-4.75 5-11.41 2.375-17.09C331.9 131.6 326.3 128 320 128H128c-8.8 0-16 7.2-16 16s7.2 16 16 16h157.2L115.8 357.6c-4.062 4.75-5 11.41-2.375 17.09C116.1 380.4 121.8 384 128 384h192c8.844 0 16-7.156 16-16s-7.2-16-16-16z" />
  </svg>
);

const SvgSquareZ = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgSquareZ;
