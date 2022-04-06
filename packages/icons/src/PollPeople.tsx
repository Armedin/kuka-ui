import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M144 48c0 26.51-21.5 48-48 48-26.51 0-48-21.49-48-48S69.49 0 96 0c26.5 0 48 21.49 48 48zM96 32c-8.83 0-16 7.16-16 16s7.17 16 16 16c8.8 0 16-7.16 16-16s-7.2-16-16-16zm496 0c26.5 0 48 21.49 48 48v64c0 26.5-21.5 48-48 48H272c-26.5 0-48-21.5-48-48V80c0-26.51 21.5-48 48-48h320zm0 32h-80v96h80c8.8 0 16-7.2 16-16V80c0-8.84-7.2-16-16-16zM256 80v64c0 8.8 7.2 16 16 16h208V64H272c-8.8 0-16 7.16-16 16zm336 240c26.5 0 48 21.5 48 48v64c0 26.5-21.5 48-48 48H272c-26.5 0-48-21.5-48-48v-64c0-26.5 21.5-48 48-48h320zm0 32H384v96h208c8.8 0 16-7.2 16-16v-64c0-8.8-7.2-16-16-16zm-336 16v64c0 8.8 7.2 16 16 16h80v-96h-80c-8.8 0-16 7.2-16 16zM1.118 486.1C6.122 446 40.15 416 80.5 416h31c40.3 0 74.4 30 79.4 70.1l1 7.9c.2 8.8-5.1 16.8-14.8 17.9-7.9.2-15.9-5.1-17-14.8l-1-7.1c-3-24-23.4-42-47.6-42h-31c-24.21 0-44.63 18-47.63 42l-.99 7.1c-1.1 9.7-9.09 15-17.86 14.8C5.249 510.8-.97 502.8.125 494l.993-7.9zm0-288C6.122 158 40.15 128 80.5 128h31c40.3 0 74.4 30 79.4 70.1l1 7.9c.2 8.8-5.1 16.8-14.8 17.9-7.9.2-15.9-5.1-17-14.8l-1-7.1c-3-24-23.4-42-47.6-42h-31c-24.21 0-44.63 18-47.63 42l-.99 7.1c-1.1 9.7-9.09 15-17.86 14.8C5.249 222.8-.97 214.8.125 206l.993-7.9zM144 336c0 26.5-21.5 48-48 48-26.51 0-48-21.5-48-48s21.49-48 48-48c26.5 0 48 21.5 48 48zm-48-16c-8.83 0-16 7.2-16 16s7.17 16 16 16c8.8 0 16-7.2 16-16s-7.2-16-16-16z" />
  </svg>
);

const SvgPollPeople = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgPollPeople;
