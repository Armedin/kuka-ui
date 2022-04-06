import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M182.6 246.6c-12.5 12.5-32.7 12.5-45.2 0l-80.03-80c-12.49-12.5-12.49-32.7 0-45.2 12.5-12.5 32.76-12.5 45.23 0l56.5 57.3L297.4 41.37c12.5-12.49 32.7-12.49 45.2 0 12.5 12.5 12.5 32.76 0 45.26l-160 159.97zm0 224c-12.5 12.5-32.7 12.5-45.2 0L9.372 342.6c-12.496-12.5-12.496-32.7 0-45.2 12.498-12.5 32.758-12.5 45.258 0L159.1 402.7l234.3-233.3c12.5-12.5 32.7-12.5 45.2 0s12.5 32.7 0 45.2l-256 256z" />
  </svg>
);

const SvgCheckDoubleSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCheckDoubleSolid;
