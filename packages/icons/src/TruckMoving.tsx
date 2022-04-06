import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M640 250.7V360c0 19.4-13.7 35.5-32.9 39.2l.9.8c0 44.2-35.8 80-80 80s-80-35.8-80-80H288c0 44.2-35.8 80-80 80-26.2 0-49.4-12.6-64-32-14.6 19.4-37.8 32-64 32-44.18 0-80-35.8-80-80V104c0-39.76 32.24-72 72-72h336c39.8 0 72 32.24 72 72v24h56c15.1 0 29.3 7.1 38.4 19.2l56 74.7c6.2 8.3 9.6 18.4 9.6 28.8zM32 104v231.1c13.37-10 29.99-15.1 48-15.1 26.2 0 49.4 12.6 64 31.1 14.6-18.5 37.8-31.1 64-31.1 32.8 0 60.1 19.7 73.3 48H448V104c0-22.09-17.9-40-40-40H72c-22.09 0-40 17.91-40 40zm496 216c32.8 0 60.9 19.7 73.3 47.9 3.8-.6 6.7-4.8 6.7-7.9V256H480v79.1c13.4-10 29.1-15.1 48-15.1zm-48-160v64h112l-43.2-57.6c-3-4-7.8-6.4-12.8-6.4h-56zm48 288c26.5 0 48-21.5 48-48s-21.5-48-48-48-48 21.5-48 48 21.5 48 48 48zm-320-96c-26.5 0-48 21.5-48 48s21.5 48 48 48 48-21.5 48-48-21.5-48-48-48zM80 448c26.5 0 48-21.5 48-48s-21.5-48-48-48c-26.51 0-48 21.5-48 48s21.49 48 48 48z" />
  </svg>
);

const SvgTruckMoving = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgTruckMoving;