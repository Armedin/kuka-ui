import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M52.69 411.3c-6.25-6.2-6.25-16.4 0-22.6 6.24-6.3 16.37-6.3 22.62 0L144 457.4V272H16c-8.836 0-16-7.2-16-16s7.164-16 16-16h384V54.63l-68.7 68.67c-6.2 6.3-16.4 6.3-22.6 0-6.3-6.2-6.3-16.4 0-22.6l96-96.014c6.2-6.248 16.4-6.248 22.6 0l96 96.014c6.3 6.2 6.3 16.4 0 22.6-6.2 6.3-16.4 6.3-22.6 0L432 54.63V240h128c8.8 0 16 7.2 16 16s-7.2 16-16 16H175.1v185.4l69.6-68.7c6.2-6.3 16.4-6.3 22.6 0 6.3 6.2 6.3 16.4 0 22.6l-96 96c-6.2 6.3-16.4 6.3-22.6 0l-96.01-96zM143.1 47.1c0-7.94 8.1-16 16-16 9.7 0 16 8.06 16 16V192h-32V47.1zM432 320v144c0 8.8-7.2 16-16 16s-16-7.2-16-16V320h32z" />
  </svg>
);

const SvgArrowDownUpAcrossLine = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgArrowDownUpAcrossLine;
