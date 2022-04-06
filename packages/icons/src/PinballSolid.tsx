import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M145.4 211.6c-21.5-17.1-43.5-20.5-55.3-20.5-49.65 0-90.1 41.71-90.1 93.11 0 39.17 24.13 75.61 62.12 88.44l310.3 104.8a32.354 32.354 0 0 0 10.29 1.677c17.94 0 33.3-14.85 33.3-34.3 0-10.24-4.414-20.37-12.85-27.14L145.4 211.6zM96.17 319.7c-17.58 0-31.89-14.31-31.89-31.89s14.31-31.89 31.89-31.89 31.89 14.31 31.89 31.89c.04 17.59-14.26 31.89-31.89 31.89zM352 32c-53.02 0-96 42.98-96 96s42.98 96 96 96 96-42.98 96-96-43-96-96-96z" />
  </svg>
);

const SvgPinballSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgPinballSolid;
