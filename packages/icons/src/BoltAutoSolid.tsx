import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M240.5 224H352c13.3 0 25.3 8.3 29.1 20.7 5.5 12.5 2 26.6-8 35.4l-256 224c-11.3 9.8-27.83 10.6-39.91 1.8-12.09-8.8-16.49-24.8-10.6-38.5L143.5 288H32c-13.33 0-25.265-8.3-29.954-20.7a32.096 32.096 0 0 1 8.884-35.4L266.9 7.918c11.3-9.838 27.8-10.587 39.9-1.804 12.1 8.786 16.5 24.756 10.6 38.496L240.5 224zM464 288c12.1 0 23.2 6.8 28.6 17.7l80 160c7.9 15.8 1.5 35-14.3 42.9-15.8 7.9-35 1.5-42.9-14.3l-7.2-14.3h-88.4l-7.2 14.3c-7.9 15.8-27.1 22.2-42.9 14.3-15.8-7.9-22.2-27.1-14.3-42.9l80-160c5.4-10.9 16.5-17.7 28.6-17.7zm-16.2 136h32.4L464 391.6 447.8 424z" />
  </svg>
);

const SvgBoltAutoSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgBoltAutoSolid;
