import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M464 32c8.8 0 16 7.16 16 16s-7.2 16-16 16H80c-26.51 0-48 21.49-48 48v288c0 26.5 21.49 48 48 48h352c26.5 0 48-21.5 48-48V176c0-26.5-21.5-48-48-48H112c-8.8 0-16-7.2-16-16s7.2-16 16-16h320c44.2 0 80 35.8 80 80v224c0 44.2-35.8 80-80 80H80c-44.18 0-80-35.8-80-80V112c0-44.18 35.82-80 80-80h384zM360 288c0-13.3 10.7-24 24-24s24 10.7 24 24-10.7 24-24 24-24-10.7-24-24z" />
  </svg>
);

const SvgWallet = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgWallet;
