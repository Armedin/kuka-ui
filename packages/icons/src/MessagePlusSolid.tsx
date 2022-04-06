import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M448 0H64C28.75 0 0 28.75 0 63.1v287.1c0 35.25 28.75 63.1 64 63.1h96v83.1c0 9.75 11.25 15.45 19.12 9.7l124.88-91h144c35.25 0 64-28.75 64-63.1V63.1C512 28.75 483.3 0 448 0zM336 231.1h-56V288c-.9 13.3-10.7 24-24 24-13.27 0-23.1-10.74-23.1-23.1v-57.8h-57.8c-12.4 0-23.1-9.8-23.1-23.1 0-13.26 10.74-23.1 23.1-23.1h56v-57.8c.9-12.4 11.6-23.1 24.9-23.1s23.1 10.74 23.1 23.1V184h56c14.2 0 24.9 10.7 24.9 24s-10.7 23.1-24 23.1z" />
  </svg>
);

const SvgMessagePlusSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgMessagePlusSolid;
