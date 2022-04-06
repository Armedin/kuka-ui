import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M278.9 2.829a16.05 16.05 0 0 1 18.2 0L517.3 154.7c11.2 7.8 17.8 20 20.4 33.5L571.4 458c2.7 28.7-18.8 54-47.6 54H52.25c-28.87 0-51.211-25.3-47.63-54l33.72-269.8c1.7-13.5 9.12-25.7 20.38-33.5L278.9 2.829zM70.1 192.2 36.37 462c-1.19 9.6 6.26 18 15.88 18H272V46.47L76.89 181c-3.75 2.6-6.23 6.7-6.79 11.2zM304 288.4V480h101.4L304 288.4zM523.8 480c9.6 0 17-8.4 15.8-18l-33.7-269.8c-.6-4.5-3-8.6-6.8-11.2L304 46.47V220l137.6 260h82.2z" />
  </svg>
);

const SvgTent = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgTent;
