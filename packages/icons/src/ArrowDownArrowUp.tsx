import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M224 352a15.933 15.933 0 0 0-11.31 4.688L144 425.4V48c0-8.84-7.2-16-16-16s-16 7.16-16 16v377.4l-68.69-68.69c-6.25-6.25-16.38-6.25-22.62 0s-6.25 16.38 0 22.62l96 96c6.25 6.25 16.38 6.25 22.62 0l96-96c6.25-6.25 6.25-16.38 0-22.62A15.993 15.993 0 0 0 224 352zm203.3-219.3-96-96c-6.25-6.25-16.38-6.25-22.62 0l-96 96c-6.25 6.25-6.25 16.38 0 22.62s16.38 6.25 22.62 0L304 86.63V464c0 8.844 7.156 16 16 16s16-7.156 16-16V86.63l68.69 68.69C407.8 158.4 411.9 160 416 160s8.188-1.562 11.31-4.688c6.29-6.212 6.29-16.412-.01-22.612z" />
  </svg>
);

const SvgArrowDownArrowUp = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgArrowDownArrowUp;
