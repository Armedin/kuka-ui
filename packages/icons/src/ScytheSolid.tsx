import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M549.8 0H339.7C191.1 0 63.1 63.1 0 191.1l509.1.9L549.8 0zm82.8 11.62C626.6 4.245 617.48 0 607.98 0h-25.5l-59.75 288h-106.7c-17.67 0-31.99 14.33-31.99 32s14.32 32 31.99 32h93.49l-29.25 141c-.875 4.75.375 9.5 3.5 13.25 2.93 3.65 7.43 5.75 11.33 5.75h31.5c7.623 0 14.25-5.5 15.62-13L639.5 38c1.7-9.38-.8-19.9-6.9-26.38z" />
  </svg>
);

const SvgScytheSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgScytheSolid;
