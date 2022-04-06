import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M512 400v31.1c0 9.7-7.2 16.9-16 16.9s-16-7.2-16-16v-31.1c0-79.41-64.59-143.1-144-143.1H60.2l158.1 131.7c6.781 5.656 7.688 15.75 2.031 22.53C217.1 414 212.6 416 208 416c-3.625 0-7.25-1.219-10.25-3.719l-192-159.1C2.094 249.3 0 244.7 0 239.1a15.93 15.93 0 0 1 5.75-12.28l192-159.1c6.75-5.65 16.85-4.78 22.55 2.03 5.656 6.781 4.75 16.87-2.031 22.53L60.2 224H336c97 0 176 78.1 176 176z" />
  </svg>
);

const SvgReply = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgReply;
