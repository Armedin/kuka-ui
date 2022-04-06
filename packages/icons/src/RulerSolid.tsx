import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M177.9 494.1c-18.7 18.7-49.1 18.7-67.8 0l-92.16-92.2c-18.745-18.7-18.745-49.1 0-67.8l50.75-50.8 48.01 48c6.2 6.3 16.4 6.3 22.6 0 6.3-6.2 6.3-16.4 0-22.6l-47.99-48 41.39-41.4 48 48c6.2 6.3 16.4 6.3 22.6 0 6.3-6.2 6.3-16.4 0-22.6l-48-48 41.4-41.4 48 48c6.2 6.3 16.4 6.3 22.6 0 6.3-6.2 6.3-16.4 0-22.6l-48-48 41.4-41.39 48 47.99c6.2 6.3 16.4 6.3 22.6 0 6.3-6.2 6.3-16.4 0-22.6l-48-48.01 50.8-50.75c18.7-18.745 49.1-18.745 67.8 0l92.2 92.16c18.7 18.7 18.7 49.1 0 67.8L177.9 494.1z" />
  </svg>
);

const SvgRulerSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgRulerSolid;
