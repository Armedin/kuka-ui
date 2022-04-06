import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M176 224h275.8L293.7 92.3c-6.781-5.656-7.688-15.75-2.031-22.53 5.688-6.812 15.78-7.687 22.53-2.031l192 159.1C509.9 230.8 512 235.2 512 239.1c0 4.75-2.094 9.253-5.75 12.28l-192 159.1c-3 2.5-6.625 3.719-10.25 3.719a15.992 15.992 0 0 1-12.28-5.75c-5.656-6.781-4.75-16.87 2.031-22.53l158.1-131.7H176c-79.41 0-144 64.59-144 143.1v31.1C32 440.8 24.84 448 16 448s-16-7.2-16-16v-31.1C0 302.1 78.97 224 176 224z" />
  </svg>
);

const SvgShare = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgShare;
