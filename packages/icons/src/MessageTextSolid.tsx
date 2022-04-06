import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M448 0H64C28.75 0 0 28.75 0 63.1v287.1c0 35.25 28.75 63.1 64 63.1h96v83.98c0 9.75 11.25 15.45 19.12 9.7L304 415.1h144c35.25 0 64-28.75 64-63.1V63.1C512 28.75 483.3 0 448 0zM344 159.1l-64 .9v136c0 13.3-10.7 24-24 24s-24-10.7-24-24V160h-64c-13.25 0-24-10.75-24-23.1s10.8-24.9 24-24.9h176c13.25 0 24 10.75 24 24s-10.7 23.1-24 23.1z" />
  </svg>
);

const SvgMessageTextSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgMessageTextSolid;
