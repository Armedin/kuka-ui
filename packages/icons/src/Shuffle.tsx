import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M427.3 292.7c-6.25-6.25-16.38-6.25-22.62 0s-6.25 16.38 0 22.62L457.4 368H336c-5 0-9.781-2.406-12.78-6.406l-38.41-51.19c-5.312-7.094-15.38-8.5-22.41-3.219-7.062 5.312-8.5 15.34-3.219 22.41l38.41 51.19C306.6 392.8 320.1 400 336 400h121.4l-52.69 52.69c-6.25 6.25-6.25 16.38 0 22.62C407.8 478.4 411.9 480 416 480s8.188-1.562 11.31-4.688l80-80c6.25-6.25 6.25-16.38 0-22.62L427.3 292.7zM336 144h121.4l-52.69 52.69c-6.25 6.25-6.25 16.38 0 22.62C407.8 222.4 411.9 224 416 224s8.188-1.562 11.31-4.688l80-80c6.25-6.25 6.25-16.38 0-22.62l-80-80c-6.25-6.25-16.38-6.25-22.62 0s-6.25 16.38 0 22.62L457.4 112H336c-15.03 0-29.41 7.188-38.41 19.22l-172.8 230.4C121.8 365.6 117 368 112 368H16c-8.844 0-16 7.2-16 16s7.156 16 16 16h96c15.03 0 29.41-7.188 38.41-19.22l172.8-230.4C326.2 146.4 331 144 336 144zm-320 0h96c5 0 9.781 2.406 12.78 6.406l38.41 51.19C166.3 205.8 171.2 208 176 208a15.93 15.93 0 0 0 9.594-3.188c7.062-5.312 8.5-15.34 3.219-22.41L150.4 131.2c-9-12-23.4-19.2-38.4-19.2H16c-8.844 0-16 7.2-16 16s7.156 16 16 16z" />
  </svg>
);

const SvgShuffle = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgShuffle;
