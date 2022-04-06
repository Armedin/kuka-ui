import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M128.1 223.1 63.04 487.8c-4.28 17.1-21.66 27.5-38.8 23.2C7.093 506.8-3.331 489.4.955 472.2L100.8 72.72C111.5 29.98 149.9 0 193.1 0H320c53 0 96 42.98 96 96v296.6c19.1 11 32 31.7 32 55.4 0 35.3-28.7 64-64 64s-64-28.7-64-64c0-23.7 12.9-44.4 32-55.4V224l-223.9-.9zm65-160c-13.8 0-26.6 10.89-30.2 25.14l-18.8 70.86H352v-64c0-16.77-14.3-32-32-32H193.1zM384 464c8.8 0 16-7.2 16-16s-7.2-16-16-16-16 7.2-16 16 7.2 16 16 16z" />
  </svg>
);

const SvgWalkerSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgWalkerSolid;
