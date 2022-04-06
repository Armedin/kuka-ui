import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="m507.3 244.7-144-144c-6.25-6.25-16.38-6.25-22.62 0s-6.25 16.38 0 22.62L457.4 240H176c-8.8 0-16 7.2-16 16s7.156 16 16 16h281.4L340.7 388.7c-6.25 6.25-6.25 16.38 0 22.62s16.38 6.25 22.62 0l144-144C510.4 264.2 512 260.1 512 256s-1.6-8.2-4.7-11.3zM176 448H80c-26.47 0-48-21.5-48-48V112c0-26.47 21.53-48 48-48h96c8.8 0 16-7.16 16-16s-7.2-16-16-16H80C35.88 32 0 67.88 0 112v288c0 44.1 35.88 80 80 80h96c8.8 0 16-7.2 16-16s-7.2-16-16-16z" />
  </svg>
);

const SvgArrowRightFromBracket = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgArrowRightFromBracket;
