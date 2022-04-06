import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M393.4 41.37c12.5-12.49 32.7-12.49 45.2 0 12.5 12.5 12.5 32.76 0 45.26L269.3 255.1l169.3 170.3c12.5 12.5 12.5 32.7 0 45.2s-32.7 12.5-45.2 0L223.1 301.3 54.63 470.6c-12.5 12.5-32.76 12.5-45.258 0-12.496-12.5-12.496-32.7 0-45.2L178.7 255.1 9.372 86.63c-12.496-12.5-12.496-32.76 0-45.26 12.498-12.49 32.758-12.49 45.258 0L223.1 210.7 393.4 41.37z" />
  </svg>
);

const SvgXmarkLargeSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgXmarkLargeSolid;
