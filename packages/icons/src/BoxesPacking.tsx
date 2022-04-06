import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M592 32H304c-8.8 0-16 7.16-16 16v80h-32V48c0-26.51 21.5-48 48-48h288c26.5 0 48 21.49 48 48v416c0 26.5-21.5 48-48 48H381.3c1.7-5.9 2.7-10.4 2.7-16v-16h208c8.8 0 16-7.2 16-16V48c0-8.84-7.2-16-16-16zm-36.7 284.7c6.3 6.2 6.3 16.4 0 22.6-6.2 6.3-16.4 6.3-22.6 0L496 302.6V432c0 8.8-7.2 16-16 16s-16-7.2-16-16V302.6l-36.7 36.7c-6.2 6.3-16.4 6.3-22.6 0-6.3-6.2-6.3-16.4 0-22.6l64-64c6.2-6.3 16.4-6.3 22.6 0l64 64zM240 320c8.8 0 16 7.2 16 16s-7.2 16-16 16h-96c-8.8 0-16-7.2-16-16s7.2-16 16-16h96zM0 192c0-17.7 14.33-32 32-32h320c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32v192c0 17.7-14.3 32-32 32H64c-17.67 0-32-14.3-32-32V288c-17.67 0-32-14.3-32-32v-64zm352 0H32v64h320v-64zM64 480h256V288H64v192z" />
  </svg>
);

const SvgBoxesPacking = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgBoxesPacking;
