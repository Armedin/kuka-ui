import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M633.9 483.4c7 5.5 8.1 14.7 2.7 22.5-5.5 7-15.6 8.1-22.5 2.7L6.086 28.56C-.849 23.08-2.033 13.02 3.443 6.086 8.918-.849 18.98-2.033 25.91 3.443L633.9 483.4zM528 336h-3.4l-40.5-32.9H528c8.8 0 16 8.1 16 16 0 9.7-7.2 16.9-16 16.9zm0-128.9H362.5l-41.4-32H528c8.8 0 16 8.1 16 16 0 9.7-7.2 16-16 16zm-416.9 0c-7.9 0-16-6.3-16-16 0-7.9 8.1-16 16-16h4.3l40.5 32h-44.8zM544 63.1c0 9.74-7.2 16-16 16H200.4l-40.6-32H528c8.8 0 16 8.06 16 16zM111.1 336c-7.9 0-16-7.2-16-16.9 0-7.9 8.1-16 16-16h166.4L318 336H111.1zm328.5 96 40.6 32H111.1c-7.9 0-16-7.2-16-16s8.1-16 16-16h328.5z" />
  </svg>
);

const SvgAlignSlash = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgAlignSlash;
