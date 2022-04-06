import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M316.5 211.6c-30.29-30.29-68.88-47.19-108.5-50.78v-16.76h48c8.844 0 15.1-7.156 15.1-15.1s-7.156-15.1-15.1-15.1h-48V49.31l54 43.2a16.035 16.035 0 0 0 9.984 3.5c4.703 0 9.344-2.062 12.52-5.1 5.516-6.906 4.391-16.97-2.5-22.5L202 3.516a15.981 15.981 0 0 0-20 0L101.1 67.51c-6.891 5.531-8.016 15.59-2.5 22.5 5.531 6.875 15.58 7.1 22.5 2.5l54-43.2v62.7h-48c-8.844 0-15.1 7.156-15.1 15.1s7.156 15.1 15.1 15.1h48v16.76c-38.7 5.43-77.26 22.33-107.55 52.63-68.73 68.73-68.73 180.2 0 248.9 68.73 68.73 180.2 68.73 248.9 0 68.75-68.8 68.75-180.2.05-248.9zm-22.7 226.2c-56.15 56.14-147.5 56.14-203.6 0-56.14-56.14-56.14-147.5 0-203.6 56.15-56.14 147.5-56.14 203.6 0 55.3 56.1 55.3 147.5 0 203.6z" />
  </svg>
);

const SvgMarsStrokeUp = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgMarsStrokeUp;
