import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M368 432h-64c-8.844 0-15.1 7.156-15.1 16s6.3 16 15.1 16h64c8.844 0 16-7.156 16-16s-7.2-16-16-16zm64-128H304c-8.844 0-15.1 7.156-15.1 16s6.3 16 15.1 16h128c8.844 0 16-7.156 16-16s-7.2-16-16-16zm64-128H304c-8.844 0-15.1 7.156-15.1 16s6.3 16 15.1 16h192c8.8 0 16-7.2 16-16s-7.2-16-16-16zm64-128H304c-8.844 0-15.1 7.156-15.1 16s6.3 16 15.1 16h256c8.8 0 16-7.16 16-16s-7.2-16-16-16zM224 352a15.933 15.933 0 0 0-11.31 4.688L144 425.4V48c0-8.84-7.2-16-16-16s-16 7.16-16 16v377.4l-68.69-68.69c-6.25-6.25-16.38-6.25-22.62 0s-6.25 16.38 0 22.62l96 96c6.25 6.25 16.38 6.25 22.62 0l96-96c6.25-6.25 6.25-16.38 0-22.62A15.993 15.993 0 0 0 224 352z" />
  </svg>
);

const SvgArrowDownWideShort = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgArrowDownWideShort;
