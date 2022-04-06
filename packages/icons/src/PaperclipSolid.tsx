import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M364.2 83.8c-24.4-24.41-64-24.41-88.4 0l-184 184c-42.09 42.1-42.09 110.3 0 152.4 42.1 42.1 110.3 42.1 152.4 0l152-152c10.9-10.9 28.7-10.9 39.6 0 10.9 10.9 10.9 28.7 0 39.6l-152 152c-64 64-167.6 64-231.6 0-63.95-64-63.95-167.6 0-231.6l184-184c46.3-46.28 121.3-46.28 167.6 0s46.3 121.3 0 167.6l-176 176c-28.6 28.6-75 28.6-103.6 0-28.61-28.6-28.61-75 0-103.6l144-144c10.9-10.9 28.7-10.9 39.6 0 10.9 10.9 10.9 28.7 0 39.6l-144 144c-6.7 6.7-6.7 17.7 0 24.4 6.7 6.7 17.7 6.7 24.4 0l176-176c24.4-24.4 24.4-64 0-88.4z" />
  </svg>
);

const SvgPaperclipSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgPaperclipSolid;
