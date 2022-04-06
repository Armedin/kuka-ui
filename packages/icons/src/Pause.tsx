import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" {...props}>
    <path d="M48 63.1c-8.84 0-16 8.06-16 16.9v352c0 8.8 7.16 16 16 16s16-7.2 16-16V80c0-8.84-7.16-16.9-16-16.9zm224 0c-8.836 0-16 7.162-16 16v352c0 8.836 7.164 16 16 16s16-7.164 16-16v-352c0-7.94-7.2-16-16-16z" />
  </svg>
);

const SvgPause = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgPause;
