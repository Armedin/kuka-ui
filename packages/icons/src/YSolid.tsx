import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M378 82.61 224 298.3v149.8c0 17.67-14.31 31.1-32 31.1s-32-13.5-32-31.2V298.3L5.969 82.61C-4.313 68.23-.969 48.25 13.41 37.97c14.34-10.27 34.38-6.922 44.63 7.453L192 232.1 325.1 44.6c10.28-14.37 30.28-17.7 44.63-7.453C384.1 48.25 388.3 68.23 378 82.61z" />
  </svg>
);

const SvgYSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgYSolid;
