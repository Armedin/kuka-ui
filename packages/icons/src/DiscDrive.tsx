import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M256 224c-17.6 0-32 14.4-32 32s14.38 32 32 32c17.62 0 32-14.38 32-32s-14.4-32-32-32zm240 224h-16V96c0-35.35-28.65-64-64-64H96c-35.35 0-64 28.65-64 64v352H15.1C7.2 448 0 455.2 0 464s7.2 16 15.1 16h480c8.8 0 16-7.2 16-16s-6.3-16-15.1-16zm-48 0H64V96c0-17.62 14.38-32 32-32h320c17.62 0 32 14.38 32 32v352zM256 96c-88.4 0-160 71.6-160 160s71.62 160 160 160 160-71.63 160-160S344.4 96 256 96zm0 288c-70.75 0-128-57.25-128-128s57.25-128 128-128 128 57.25 128 128c-.1 70.6-57.4 127.9-128 128z" />
  </svg>
);

const SvgDiscDrive = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgDiscDrive;
