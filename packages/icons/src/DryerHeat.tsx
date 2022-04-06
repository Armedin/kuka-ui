import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M352 0H96C42.98 0 0 42.98 0 96v352c0 35.35 28.65 64 64 64h320c35.35 0 64-28.65 64-64V96c0-53.02-43-96-96-96zm64 448c0 17.64-14.36 32-32 32H64c-17.64 0-32-14.36-32-32V96c0-35.29 28.71-64 64-64h256c35.29 0 64 28.71 64 64v352zM192.1 120c13.2 0 23.9-10.7 23.9-24s-10.7-24-23.9-24C178.7 72 168 82.75 168 96s10.7 24 24.1 24zM120 96c0-13.25-10.69-24-24-24-13.18 0-24 10.75-24 24s10.82 24 24 24c13.3 0 24-10.7 24-24zm104 64c-79.5 0-143.99 64.5-143.99 144S144.5 448 224 448s143.1-64.5 143.1-144S303.5 160 224 160zm0 256c-61.75 0-111.1-50.24-111.1-112S162.3 192 224 192c61.75 0 111.1 50.24 111.1 112S285.7 416 224 416zm-11.4-66a33.623 33.623 0 0 1-6.297-38.84 65.543 65.543 0 0 0-12.31-75.78l-6.693-6.68c-6.25-6.25-16.38-6.25-22.62 0-6.28 5.4-6.28 16.4.02 22.6l6.7 6.7a33.623 33.623 0 0 1 6.297 38.84 65.543 65.543 0 0 0 12.31 75.78l6.703 6.688C199.8 382.4 203.9 384 208 384s8.203-1.562 11.33-4.688c6.234-6.281 6.234-16.41-.031-22.62L212.6 350zm64 0a33.623 33.623 0 0 1-6.297-38.84 65.543 65.543 0 0 0-12.31-75.78l-6.703-6.688c-6.25-6.25-16.38-6.25-22.62 0-6.234 6.281-6.234 16.41.031 22.62L235.4 258a33.623 33.623 0 0 1 6.297 38.84 65.543 65.543 0 0 0 12.31 75.78l6.703 6.688C263.8 382.4 267.9 384 272 384s8.203-1.562 11.33-4.688c6.234-6.281 6.234-16.41-.031-22.62L276.6 350z" />
  </svg>
);

const SvgDryerHeat = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgDryerHeat;