import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M492.6 226.6 44.6 34.59c-4.06-1.74-8.34-3.49-12.58-3.49-8.623 0-17.1 3.499-23.3 10.05C-.498 51.81-2.623 66.3 3.377 78.31L96 256 3.38 433.7c-6 12.02-3.875 26.5 5.344 36.27a32.033 32.033 0 0 0 23.28 10.05c4.25 0 8.531-.844 12.59-2.594L492.6 285.4a31.977 31.977 0 0 0 19.41-29.41c-.91-12.79-7.61-24.39-19.41-29.39zM31.98 64.03c.01-.02-.02.01 0 0L442.7 240h-319L31.98 64.03zm-.23 384.47L123.7 272h318.1L31.75 448.5z" />
  </svg>
);

const SvgPaperPlaneTop = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgPaperPlaneTop;
