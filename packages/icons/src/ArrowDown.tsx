import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="m378.8 309.8-176 165.9c-3.1 2.9-6.9 4.3-10.8 4.3s-7.719-1.426-10.77-4.31l-176-165.9c-6.527-6.19-7.011-16.69-1.074-23.49 5.953-6.838 16.09-7.259 22.61-1.134L176 425.9V48.59c0-9.171 7.156-16.59 15.1-16.59S208 39.42 208 48.59v377.3l149.2-140.7c6.516-6.125 16.66-5.704 22.61 1.134 5.99 6.776 5.49 17.276-1.01 23.476z" />
  </svg>
);

const SvgArrowDown = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgArrowDown;
