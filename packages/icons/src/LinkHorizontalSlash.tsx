import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M633.9 483.4c7 5.5 8.1 14.7 2.7 22.5-5.5 7-15.6 8.1-22.5 2.7L6.088 28.56c-6.936-5.48-8.12-15.54-2.644-22.474C8.919-.849 18.98-2.033 25.92 3.443L633.9 483.4zM640 320c0 31.7-11.5 60.6-30.5 82.1l-25.2-19c14.8-16.8 23.7-38.9 23.7-63.1 0-53.9-43-96-96-96h-32c-8.8 0-16-7.2-16-16s7.2-16 16-16h32c70.7 0 128 57.3 128 128zM335.9 448C265.2 448 208 390.8 208 320.1c0-21.4 5.3-41.6 14.6-59.4l25.8 19.4c-6.3 12-9.3 26.1-9.3 40 0 53 43.8 95.9 96.8 95.9h83.5l40.5 32h-124zM304.1 96h-83.5l-40.5-32h124C374.8 64 432 121.2 432 191.9c0 21.4-5.3 41.6-14.6 59.4L391.6 231c5.4-12 8.4-25.2 8.4-39.1 0-53-42.9-95.9-95.9-95.9zM32 192c0 53 42.98 96 96 96h32c8.8 0 16 7.2 16 16s-7.2 16-16 16h-32C57.31 320 0 262.7 0 192c0-31.7 11.49-60.6 30.54-83l25.14 19.9C40.93 145.7 32 167.8 32 192z" />
  </svg>
);

const SvgLinkHorizontalSlash = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgLinkHorizontalSlash;
