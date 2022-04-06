import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M560 416h-64V80c0-5.531-2.875-10.69-7.594-13.62a16.042 16.042 0 0 0-15.56-.688l-64 32c-7.906 3.97-11.11 13.56-7.156 21.47 3.969 7.875 13.55 11.12 21.47 7.156L464 105.9V416h-64c-8.844 0-16 7.156-16 16s7.156 16 16 16h160c8.844 0 16-7.156 16-16s-7.2-16-16-16zM304 64c-8.8 0-16 7.16-16 16v160H32V80c0-8.84-7.16-16-16-16S0 71.16 0 80v352c0 8.8 7.156 16 16 16s16-7.2 16-16V272h256v160c0 8.844 7.156 16 16 16s16-7.156 16-16V80c0-8.84-7.2-16-16-16z" />
  </svg>
);

const SvgH1 = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgH1;
