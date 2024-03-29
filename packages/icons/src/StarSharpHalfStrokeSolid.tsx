import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M9.267 218.9A23.953 23.953 0 0 1 1.3 192.2 23.99 23.99 0 0 1 24 176h158.5l50.6-159.28C236.3 6.764 245.6 0 256 0c10.5 0 19.7 6.764 22.9 16.72L329.5 176H488c10.3 0 19.4 6.5 22.7 16.2a24 24 0 0 1-8 26.7L371.9 320.7l51 160c3.2 10-.5 21-9.2 27-8.6 6-20.1 5.7-28.4-.8L256 406.4 126.7 506.9c-8.3 6.5-19.8 6.8-28.43.8-8.62-6-12.33-17-9.14-27l50.97-160L9.267 218.9zM256 335.5l82.2 63.9-31.5-99 88-68.4H288.6L256 129.5v206z" />
  </svg>
);

const SvgStarSharpHalfStrokeSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgStarSharpHalfStrokeSolid;
