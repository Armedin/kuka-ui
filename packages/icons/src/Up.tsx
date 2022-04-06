import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M272 448V272h80c17.69 0 32-14.36 32-31.1a31.98 31.98 0 0 0-9.375-22.63l-160-176C208.4 35.13 200.2 32 192 32s-16.4 3.13-22.6 9.38l-160 176A31.923 31.923 0 0 0 0 240c0 17.6 14.3 32 32 32h80v176c0 17.67 14.33 32 32 32h96c17.7 0 32-14.3 32-32zm-128 0V240l-110.9-1.1L192 64.06 351.1 240H240v208h-96z" />
  </svg>
);

const SvgUp = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgUp;
