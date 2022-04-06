import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M144 480C64.47 480 0 415.5 0 336c0-62.8 40.17-116.2 96.2-135.9-.13-2.7-.2-5.4-.2-8.1 0-88.4 71.6-160 160-160 59.3 0 111 32.25 138.7 80.2C409.9 101.1 428.3 96 448 96c53 0 96 42.1 96 96 0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128H144zm272-272.9c0-22.4-22.3-37.8-43.2-30l-96 36c-12.5 4.7-20.8 16.6-20.8 30v87.2c-5.9-1.5-10.4-2.3-16-2.3-26.5 0-48 17.9-48 40s21.5 40 48 40 48-17.9 48-40v-92.9l96-36v59.2c-5.9-1.5-10.4-2.3-16-2.3-26.5 0-48 17.9-48 40s21.5 40 48 40 48-17.9 48-40V207.1z" />
  </svg>
);

const SvgCloudMusicSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCloudMusicSolid;
