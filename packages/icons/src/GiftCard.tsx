import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="m288 101 38.8-62.03C341.9 14.73 368.5 0 397.1 0h2.9c44.2 0 80 35.82 80 80 0 18.01-6 34.6-16 48h48c35.3 0 64 28.7 64 64v256c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64V192c0-35.3 28.65-64 64-64h47.1C101.1 114.6 96 98.01 96 80c0-44.18 35.8-80 80-80h2.9c28.6 0 55.2 14.73 70.3 38.97L288 101zm109.1-69c-17.6 0-33.9 9.04-43.2 23.93l-45 72.07H400c26.5 0 48-21.5 48-48 0-26.51-21.5-48-48-48h-2.9zm-130 96-45-72.07A50.886 50.886 0 0 0 178.9 32H176c-26.5 0-48 21.49-48 48 0 26.5 21.5 48 48 48h91.1zM64 160c-17.67 0-32 14.3-32 32v96h512v-96c0-17.7-14.3-32-32-32H322.2l58.1 69.8c5.6 6.7 4.7 16.8-2.1 22.5-6.7 5.6-16.8 4.7-22.5-2.1L288 168.1l-67.7 82.1c-5.7 6.8-15.8 7.7-22.5 2.1-7.7-5.7-7.7-15.8-2.1-22.5l58.1-69.8H64zM32 320v64h512v-64H32zm512 128v-32H32v32c0 17.7 14.33 32 32 32h448c17.7 0 32-14.3 32-32z" />
  </svg>
);

const SvgGiftCard = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgGiftCard;
