import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="m95.1 219.5 173-43c8.6-2.2 17.3 3 19.4 11.6 2.2 8.6-3 17.3-11.6 19.4l-180.8 45V440c0 4.4 4.48 8 8 8H368c8.8 0 16 7.2 16 16s-7.2 16-16 16H103.1c-21.19 0-40-17.9-40-40V260.5l-43.22 11c-8.57 2.2-17.259-3-19.403-11.6-2.143-8.6 3.07-17.3 11.643-19.4l50.98-13V48c0-8.84 8.06-16 16-16 9.74 0 16 7.16 16 16v171.5z" />
  </svg>
);

const SvgLitecoinSign = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgLitecoinSign;
