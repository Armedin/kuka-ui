import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M399.1 320H336c-26.4 0-48 21.6-48 48v64c0 26.4 21.6 48 48 48h63.1c26.4 0 48-21.6 48-48v-64c0-26.4-20.7-48-48-48zm16 112c0 8.672-7.326 16-16 16H336c-8.674 0-16-7.328-16-16v-64c0-8.672 7.326-16 16-16h63.1c8.674 0 16 7.328 16 16v64zM464 32H336c-26.5 0-48 21.49-48 48v128c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V80c0-26.51-21.5-48-48-48zm16 176c0 8.8-7.2 16-16 16H336c-8.8 0-16-7.2-16-16V80c0-8.82 7.2-16 16-16h128c8.8 0 16 7.18 16 16v128zM224 352a15.933 15.933 0 0 0-11.31 4.688L144 425.4V48c0-8.84-7.2-16-16-16s-16 7.16-16 16v377.4l-68.69-68.69c-6.25-6.25-16.38-6.25-22.62 0s-6.25 16.38 0 22.62l96 96c6.25 6.25 16.38 6.25 22.62 0l96-96c6.25-6.25 6.25-16.38 0-22.62A15.993 15.993 0 0 0 224 352z" />
  </svg>
);

const SvgArrowDownBigSmall = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgArrowDownBigSmall;
