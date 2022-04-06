import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M384 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h320c35.35 0 64-28.65 64-64V96c0-35.35-28.7-64-64-64zm32 384c0 17.64-14.36 32-32 32H64c-17.64 0-32-14.36-32-32V96c0-17.64 14.36-32 32-32h320c17.64 0 32 14.36 32 32v320zM292.7 188.1c6.281 6.25 16.42 6.203 22.64-.047 6.234-6.266 6.203-16.41-.047-22.64C265.2 115.6 183.7 115.6 133.6 165.5 109.4 189.6 96 221.8 96 255.1s13.37 66.36 37.64 90.55c25.05 24.92 57.94 37.39 90.83 37.39s65.78-12.47 90.83-37.39c6.25-6.234 6.281-16.38.047-22.64-6.25-6.234-16.39-6.312-22.64-.047-37.63 37.47-98.84 37.45-136.5.016C138 305.7 128 281.6 128 256s10.02-49.73 28.23-67.86c37.67-37.44 98.87-37.44 136.47-.04z" />
  </svg>
);

const SvgSquareC = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgSquareC;
