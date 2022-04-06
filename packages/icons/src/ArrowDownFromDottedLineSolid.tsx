import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M320 95.1c17.67 0 32-14.33 32-32s-14.33-32-32-32-32 14.33-32 32 14.3 32 32 32zm-96 0c17.67 0 32-14.33 32-32s-14.33-32-32-32-32 14.33-32 32 14.3 32 32 32zm192 0c17.67 0 32-14.33 32-32s-14.33-32-32-32-32 14.33-32 32 14.3 32 32 32zM73.38 342.6l128 128c12.5 12.5 32.75 12.5 45.25 0l128-128c12.5-12.5 12.5-32.75 0-45.25s-32.75-12.5-45.25 0L256 370.7V191.1c0-17.69-14.31-32-32-32s-32 14.31-32 32v178.8l-73.4-72.5c-6.2-6.3-14.4-10.3-22.6-10.3s-16.37 4-22.62 10.3c-12.5 12.5-12.5 32.7 0 45.2zM128 95.1c17.67 0 32-14.33 32-32s-14.33-32-32-32-32 14.33-32 32 14.3 32 32 32zm-96 0c17.67 0 32-14.33 32-32s-14.33-32-32-32-32 14.33-32 32 14.33 32 32 32z" />
  </svg>
);

const SvgArrowDownFromDottedLineSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgArrowDownFromDottedLineSolid;
