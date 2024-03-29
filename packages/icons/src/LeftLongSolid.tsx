import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M512 256c0 17.7-14.3 32-32 32H160.1v72a23.99 23.99 0 0 1-14.42 22 24.05 24.05 0 0 1-25.94-4.407l-112.1-104c-10.24-9.5-10.24-25.69 0-35.19l112.1-104a24.049 24.049 0 0 1 25.94-4.406C154.4 133.8 160.1 142.5 160.1 151.1V224H480c17.7 0 32 14.3 32 32z" />
  </svg>
);

const SvgLeftLongSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgLeftLongSolid;
