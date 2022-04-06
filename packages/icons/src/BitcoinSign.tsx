import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" {...props}>
    <path d="M64 16c0-8.836 7.16-16 16-16s16 7.164 16 16v48h64V16c0-8.836 7.2-16 16-16s16 7.164 16 16v48.3c53.7 4.09 96 49 96 103.7 0 31.3-13.9 59.4-35.8 78.5 39.6 14.7 67.8 52.8 67.8 97.5 0 57.4-46.6 104-104 104h-24v48c0 8.8-7.2 16-16 16s-16-7.2-16-16v-48H96v48c0 8.8-7.16 16-16 16s-16-7.2-16-16v-48H41.74C18.69 448 0 429.3 0 406.3V101.6C0 80.82 16.82 64 37.57 64H64V16zm152 400c39.8 0 72-32.2 72-72s-32.2-72-72-72H32v134.3c0 5.3 4.36 9.7 9.74 9.7H216zM37.57 96c-3.08 0-5.57 2.49-5.57 5.6V240h152c39.8 0 72-32.2 72-72s-32.2-72-72-72H37.57z" />
  </svg>
);

const SvgBitcoinSign = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgBitcoinSign;
