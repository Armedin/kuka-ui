import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="m432 288-96-.01c-26.51 0-48 21.49-48 48v95.99c0 26.51 21.49 48 48 48l96 .01c26.51 0 48-21.5 48-48.01v-95.99c0-26.49-21.5-47.99-48-47.99zm16 143.1c0 8.824-7.178 16-16 16h-96c-8.822 0-16-7.176-16-16v-95.99c0-8.824 7.178-16 16-16h96c8.822 0 16 7.176 16 16v95.99zm44.1-248.2L408.97 45.8C403.4 36.58 393.7 31.99 384 31.99s-19.34 4.591-24.91 13.78l-83.25 137.1c-11 18.25 2.75 41.12 25 41.12h166.3c22.26.01 35.96-22.89 24.96-41.09zM307.8 192l76.29-125.6L460.2 192H307.8zM224 352a15.933 15.933 0 0 0-11.31 4.688L144 425.4V48c0-8.844-7.156-15.1-16-15.1s-16 6.26-16 15.1v377.4l-68.69-68.69c-6.25-6.25-16.38-6.25-22.62 0s-6.25 16.38 0 22.62l96 96c6.25 6.25 16.38 6.25 22.62 0l96-96c6.25-6.25 6.25-16.38 0-22.62A15.993 15.993 0 0 0 224 352z" />
  </svg>
);

const SvgArrowDownTriangleSquare = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgArrowDownTriangleSquare;
