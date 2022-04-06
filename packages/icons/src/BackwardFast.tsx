import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M225.4 64c-6.8 0-14.3 2.34-18.9 6.88L32 214.2V80c0-8.84-7.16-16-16-16S0 71.16 0 80v352c0 8.8 7.156 16 16 16s16-7.2 16-16V297.8l174.5 143.3c4.6 4.6 12.1 6.9 18.9 6.9 10.3 0 30.6-8.1 30.6-32.9V96.03C256 72.13 235.7 64 225.4 64zM224 416.4 32.52 256 224 95.59V416.4zM481.4 64c-6.75 0-13.41 2.344-18.91 6.875l-152.6 125.3c-6.812 5.609-7.812 15.69-2.219 22.52 5.656 6.828 15.75 7.797 22.53 2.203L480 95.59v320.8l-149.8-125.3c-6.781-5.594-16.88-4.625-22.53 2.203-5.594 6.828-4.594 16.91 2.219 22.52l152.6 125.3C467.1 445.7 474.6 448 481.4 448c16.1 0 30.6-13.4 30.6-32.9V96.03C512 77.44 497.5 64 481.4 64z" />
  </svg>
);

const SvgBackwardFast = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgBackwardFast;
