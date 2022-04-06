import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M448 230.17V480H0V230.17h141.13v124.92h165.74V230.17ZM306.87 32H141.13v124.91h165.74Z" />
  </svg>
);

const SvgUnsplash = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgUnsplash;
