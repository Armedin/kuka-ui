import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M181.8 220.9c6.781 5.594 16.88 4.625 22.53-2.203 5.594-6.828 4.594-16.91-2.219-22.52L49.53 70.88C44.03 66.34 37.38 64 30.63 64 14.5 64 0 77.44 0 96.03v319.9C0 434.6 14.5 448 30.63 448c6.75 0 13.41-2.344 18.91-6.875l152.6-125.3c6.812-5.609 7.812-15.69 2.219-22.52C198.7 286.4 188.6 285.5 181.8 291.1L32 416.4V95.59L181.8 220.9zM496 64c-8.8 0-16 7.16-16 16v134.2L305.5 70.9c-5.5-4.56-12.1-6.9-18.9-6.9-10.3 0-30.6 8.13-30.6 32.03v319.9c0 23.97 20.3 32.07 30.6 32.07 6.75 0 13.41-2.344 18.91-6.875L480 297.8V432c0 8.844 7.156 16 16 16s16-7.156 16-16V80c0-8.84-7.2-16-16-16zM288 416.4V95.59L479.5 256 288 416.4z" />
  </svg>
);

const SvgForwardFast = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgForwardFast;
