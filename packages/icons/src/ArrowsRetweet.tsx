import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M336 368H144V118.6l84.69 84.69C231.8 206.4 235.9 208 240 208s8.188-1.562 11.31-4.688c6.25-6.25 6.25-16.38 0-22.62l-112-112c-6.25-6.25-16.38-6.25-22.62 0l-112 112c-6.25 6.25-6.25 16.38 0 22.62s16.38 6.25 22.62 0L112 118.6V384c0 8.844 7.156 16 16 16h208c8.844 0 16-7.156 16-16s-7.2-16-16-16zm299.3-59.3c-6.25-6.25-16.38-6.25-22.62 0L528 393.4V128c0-8.844-7.156-16-16-16H304c-8.8 0-16 7.2-16 16s7.156 16 16 16h192v249.4l-84.69-84.69c-6.25-6.25-16.38-6.25-22.62 0s-6.25 16.38 0 22.62l112 112C503.8 446.4 507.9 448 512 448s8.187-1.562 11.31-4.688l112-112c6.29-6.212 6.29-16.412-.01-22.612z" />
  </svg>
);

const SvgArrowsRetweet = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgArrowsRetweet;
