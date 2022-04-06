import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M208 281.4c-12.5-12.5-32.76-12.5-45.26-.002l-78.06 78.07-30.06-30.06a31.983 31.983 0 0 0-22.63-9.367 31.974 31.974 0 0 0-32 31.99v135.1C.001 501.3 10.75 512 24 512h136c12.94 0 24.63-7.797 29.56-19.75a31.952 31.952 0 0 0-6.938-34.87l-30.06-30.06 78.06-78.07c12.5-12.49 12.5-32.75.002-45.25L208 281.4zM487.1 0h-136c-12.94 0-24.63 7.797-29.56 19.75a31.952 31.952 0 0 0 6.938 34.87l30.06 30.06-78.06 78.07c-12.5 12.5-12.5 32.76 0 45.26l22.62 22.62c12.5 12.5 32.76 12.5 45.26 0l78.06-78.07 30.06 30.06c9.156 9.141 22.87 11.84 34.87 6.937C504.2 184.6 512 172.9 512 159.1v-136C512 10.74 501.3 0 487.1 0z" />
  </svg>
);

const SvgUpRightAndDownLeftFromCenterSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgUpRightAndDownLeftFromCenterSolid;
