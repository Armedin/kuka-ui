import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M256 240c-21.06 0-40 14.09-46.03 34.28C208.7 278.7 208 283.3 208 288c0 26.47 21.53 48 48 48s48-21.53 48-48-21.5-48-48-48zm0-240C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm0 384c-52.94 0-96-43.06-96-96 0-41.3 27.55-73.29 40.28-84.41l79.94-69.69c4.58-4 10.18-5.9 15.78-5.9 6.688 0 13.34 2.781 18.09 8.219 8.719 10 7.656 25.16-2.312 33.88l-29.76 25.94C322.3 207.5 352 244.1 352 288c0 52.9-43.1 96-96 96z" />
  </svg>
);

const SvgCircle6Solid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCircle6Solid;
