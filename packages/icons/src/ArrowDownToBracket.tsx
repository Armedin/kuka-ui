import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M224 352c4.094 0 8.188-1.562 11.31-4.688l144-144c6.25-6.25 6.25-16.38 0-22.62s-16.38-6.25-22.62 0L240 297.4V16c0-8.844-7.2-16-16-16s-16 7.156-16 16v281.4L91.31 180.7c-6.25-6.25-16.38-6.25-22.62 0s-6.25 16.38 0 22.62l144 144C215.8 350.4 219.9 352 224 352zm224 80v-96c0-8.844-7.156-16-16-16s-16 7.2-16 16v96c0 26.47-21.53 48-48 48H80c-26.47 0-48-21.5-48-48v-96c0-8.8-7.16-16-16-16s-16 7.2-16 16v96c0 44.1 35.88 80 80 80h288c44.1 0 80-35.9 80-80z" />
  </svg>
);

const SvgArrowDownToBracket = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgArrowDownToBracket;
