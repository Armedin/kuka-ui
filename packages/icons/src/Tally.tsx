import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M127.1 32c9.7 0 16 7.16 16 16v249.8l96-32V48c0-8.84 8.1-16 16-16 9.7 0 16 7.16 16 16v207.1l96.9-32V48c0-8.84 7.2-16 16-16s16 7.16 16 16v164.5l96-32V48c0-8.84 7.2-16 16-16s16 7.16 16 16v121.8l74.9-25c8.4-2.8 17.5 1.8 20.3 10.1 1.9 8.4-1.8 17.5-10.1 20.3L528 203.5V464c0 8.8-7.2 16-16 16s-16-7.2-16-16V214.2l-96 32V464c0 8.8-7.2 16-16 16s-16-7.2-16-16V256.9l-96.9 32V464c0 8.8-6.3 16-16 16-7.9 0-16-7.2-16-16V299.5l-96 32V464c0 8.8-6.3 16-16 16-7.9 0-16-7.2-16-16V342.2l-74.04 25c-8.38 1.9-17.44-1.8-20.24-10.1-2.79-8.4 1.74-17.5 10.12-20.3l84.16-28.3V48c0-8.84 8.1-16 16-16z" />
  </svg>
);

const SvgTally = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgTally;
