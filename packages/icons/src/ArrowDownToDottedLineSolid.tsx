import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M128 416c-17.67 0-32 14.33-32 32s14.33 32 32 32 32-14.33 32-32-14.3-32-32-32zm96 0c-17.67 0-32 14.33-32 32s14.33 32 32 32 32-14.33 32-32-14.3-32-32-32zm-192 0c-17.67 0-32 14.33-32 32s14.33 32 32 32 32-14.33 32-32-14.33-32-32-32zm41.38-185.4 128 128c12.5 12.5 32.75 12.5 45.25 0l128-128c12.5-12.5 12.5-32.75 0-45.25s-32.75-12.5-45.25 0L256 258.7V79.1c0-17.69-14.31-32-32-32s-32 14.31-32 32v179.6l-73.4-73.3c-6.2-6.3-14.4-10.3-22.6-10.3s-16.37 4-22.62 10.3c-12.5 12.5-12.5 32.7 0 45.2zM320 416c-17.67 0-32 14.33-32 32s14.33 32 32 32 32-14.33 32-32-14.3-32-32-32zm96 0c-17.67 0-32 14.33-32 32s14.33 32 32 32 32-14.33 32-32-14.3-32-32-32z" />
  </svg>
);

const SvgArrowDownToDottedLineSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgArrowDownToDottedLineSolid;
