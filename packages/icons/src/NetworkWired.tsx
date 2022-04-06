import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M336 240h288c8.8 0 16 7.2 16 16s-7.2 16-16 16H496v48h64c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48H400c-26.5 0-48-21.5-48-48v-96c0-26.5 21.5-48 48-48h64v-48H176v48h64c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48H80c-26.51 0-48-21.5-48-48v-96c0-26.5 21.49-48 48-48h64v-48H16c-8.836 0-16-7.2-16-16s7.164-16 16-16h288v-48h-64c-26.5 0-48-21.5-48-48V48c0-26.51 21.5-48 48-48h160c26.5 0 48 21.49 48 48v96c0 26.5-21.5 48-48 48h-64v48zm64-208H240c-8.8 0-16 7.16-16 16v96c0 8.8 7.2 16 16 16h160c8.8 0 16-7.2 16-16V48c0-8.84-7.2-16-16-16zm0 320c-8.8 0-16 7.2-16 16v96c0 8.8 7.2 16 16 16h160c8.8 0 16-7.2 16-16v-96c0-8.8-7.2-16-16-16H400zm-320 0c-8.84 0-16 7.2-16 16v96c0 8.8 7.16 16 16 16h160c8.8 0 16-7.2 16-16v-96c0-8.8-7.2-16-16-16H80z" />
  </svg>
);

const SvgNetworkWired = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgNetworkWired;
