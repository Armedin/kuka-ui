import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm121.6 248.3-104 112c-4.6 4.9-10.9 7.7-17.6 7.7s-13.05-2.781-17.59-7.656l-104-112a24.053 24.053 0 0 1-4.406-25.94C133.8 213.7 142.5 208 152 208h208c9.547 0 18.19 5.656 21.1 14.41 4.7 8.79 3 18.89-3.5 25.89z" />
  </svg>
);

const SvgCircleCaretDownSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCircleCaretDownSolid;
