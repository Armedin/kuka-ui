import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M224 128V0H48C21.49 0 0 21.49 0 48v416c0 26.5 21.49 48 48 48h288c26.51 0 48-21.49 48-48V160H256.9c-18.6 0-32.9-14.3-32.9-32zm57.5 83.1c4.1 3 6.5 7.8 6.5 12.9v160c0 17.62-21.5 32-48 32s-48-14.4-48-32 21.5-32 48-32c5.375 0 10.75.75 16 2v-76.4l-96 37.5V416c0 17.62-21.5 32-48 32s-48-14.4-48-32 21.5-32 48-32c5.375 0 10.75.75 16 2V271.3c0-7 4.5-13.2 11.3-15.3l128-47.25c4.7-1.45 10.1-.65 14.2 2.35zM256 0v128h128L256 0z" />
  </svg>
);

const SvgFileMusicSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgFileMusicSolid;
