import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M252.4 103.8c-2.7-4.83-2.7-10.77 0-15.64l27-48c2.8-5.04 8.2-8.16 14-8.16h53.2c5.8 0 11.2 3.12 14 8.16l27 48c2.7 4.87 2.7 10.81 0 15.64l-27 48c-2.8 5.1-8.2 8.2-14 8.2h-53.2c-5.8 0-11.2-3.1-14-8.2l-27-48zm171.7 339.9c26.1 25.2 8.2 68.3-27.4 68.3H80c-44.18 0-80-35.8-80-80V115.3c0-35.62 43.09-53.47 68.28-28.27L424.1 443.7zm32.1-67.1c-5.1-2.8-8.2-8.2-8.2-14v-53.2c0-5.8 3.1-11.2 8.2-14l48-27c4.8-2.7 9.9-2.7 15.6 0l48 27c5.1 2.8 8.2 8.2 8.2 14v53.2c0 5.8-3.1 11.2-8.2 14l-48 27c-5.7 2.7-10.8 2.7-15.6 0l-48-27zM192 64c0 17.67-14.3 32-32 32s-32-14.33-32-32 14.3-32 32-32 32 14.33 32 32zm160 192c0-17.7 14.3-32 32-32s32 14.3 32 32-14.3 32-32 32-32-14.3-32-32z" />
  </svg>
);

const SvgHillRockslideSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgHillRockslideSolid;
