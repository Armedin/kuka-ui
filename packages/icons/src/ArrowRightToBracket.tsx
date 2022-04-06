import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M352 256c0-4.094-1.562-8.188-4.688-11.31l-144-144c-6.25-6.25-16.38-6.25-22.62 0s-6.25 16.38 0 22.62L297.4 240H16c-8.844 0-16 7.2-16 16s7.156 16 16 16h281.4L180.7 388.7c-6.25 6.25-6.25 16.38 0 22.62s16.38 6.25 22.62 0l144-144C350.4 264.2 352 260.1 352 256zm80-224h-96c-8.8 0-16 7.16-16 16s7.2 16 16 16h96c26.5 0 48 21.53 48 48v288c0 26.47-21.53 48-48 48h-96c-8.844 0-16 7.156-16 16s7.156 16 16 16h96c44.13 0 80-35.88 80-80V112c0-44.12-35.9-80-80-80z" />
  </svg>
);

const SvgArrowRightToBracket = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgArrowRightToBracket;
