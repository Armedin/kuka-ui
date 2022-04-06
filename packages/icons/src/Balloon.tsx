import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M176 80c-52.94 0-96 43.06-96 96 0 8.8 7.16 16 16 16s16-7.156 16-16c0-35.28 28.72-64 64-64 8.8 0 16-7.2 16-16s-7.2-16-16-16zm208 107.4C384 84.09 297.9 0 192 0S0 84.09 0 187.4c0 81.31 98.06 189.1 157.2 228.8l-42.9 71.49a16.013 16.013 0 0 0-.219 16.09C116.9 508.9 122.3 512 128 512h128c5.75 0 11.09-3.094 13.94-8.125 2.812-5 2.75-11.16-.219-16.09l-42.9-71.49C285.9 376.5 384 268.7 384 187.4zM227.8 480h-71.5l28.8-48H199l28.8 48zm-35.2-80C169.7 396.2 32 272.9 32 187.4 32 101.7 103.8 32 192 32s160 69.72 160 155.4c0 85.5-137.6 208.8-159.4 212.6z" />
  </svg>
);

const SvgBalloon = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgBalloon;
