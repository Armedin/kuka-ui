import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M83.41 364.4c94.89 0 250.3-156.1 250.3-249.7 0-33.99-21.9-46.18-46.28-46.18-94.89 0-250.3 156.1-250.3 249.7 0 33.98 21.88 46.18 46.28 46.18zM447.1 126.9c0-60.67-39.1-94.9-94.2-94.9-14 0-29.21 2.584-44.94 6.73 7.579 1.675 58.01 13.89 58.01 75.62 0 111.4-169.8 282.1-282.6 282.1-.122 0-.452.007-.97.007-8.226 0-63.66-1.682-75.59-58.57-4.517 16.74-6.845 32.69-6.845 47.49C0 445.4 39.44 480 94.95 480 234.8 480 447.1 270.8 447.1 126.9z" />
  </svg>
);

const SvgFlyingDiscSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgFlyingDiscSolid;
