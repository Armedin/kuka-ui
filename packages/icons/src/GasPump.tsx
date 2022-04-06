import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M95.1 0h160C291.3 0 320 28.65 320 64v192h16c44.2 0 80 35.8 80 80v48c0 17.7 14.3 32 32 32s32-14.3 32-32V224c-35.3 0-64-28.7-64-64V84.37l-26.8-24.58c-6.5-5.97-7-16.09-1-22.6 6-6.52 16.1-6.96 22.6-.98l80.4 73.69c13.3 12.2 20.8 29.3 20.8 47.2V384c0 35.3-28.7 64-64 64s-64-28.7-64-64v-48c0-26.5-21.5-48-48-48h-16v192h16c8.8 0 16 7.2 16 16s-7.2 16-16 16H16c-8.836 0-16-7.2-16-16s7.164-16 16-16h16V64C32 28.65 60.65 0 96 0h-.9zm160 32h-160c-16.77 0-32 14.33-32 32v128H288V64c0-17.67-14.3-32-32.9-32zM288 224H63.1v256H288V224zm192-32v-34.9c0-9-3.8-17.5-10.4-23.6L448 113.7V160c0 17.7 14.3 32 32 32z" />
  </svg>
);

const SvgGasPump = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgGasPump;
