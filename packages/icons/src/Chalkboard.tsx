import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M560 448H416v-48c0-26.47-21.53-48-48-48h-96c-26.5 0-48 21.5-48 48v48H16c-8.844 0-16 7.2-16 16s7.156 16 16 16h544c8.844 0 16-7.156 16-16s-7.2-16-16-16zm-176 0H256v-48c0-8.8 7.2-16 16-16h96c8.828 0 16 7.188 16 16v48zM45.32 383.8C55.35 385.4 64 377.7 64 368V80c0-8.84 7.16-16 16-16h416c8.8 0 16 7.16 16 16v288c0 8.836 7.164 16 16 16s16-7.164 16-16V80c0-26.51-21.5-48-48-48H80c-26.51 0-48 21.49-48 48v287.2c0 7.9 5.46 15.3 13.32 16.6z" />
  </svg>
);

const SvgChalkboard = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgChalkboard;
