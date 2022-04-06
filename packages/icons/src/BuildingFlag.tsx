import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M64 120c0-13.3 10.75-24 24-24h48c13.3 0 24 10.7 24 24v48c0 13.3-10.7 24-24 24H88c-13.25 0-24-10.7-24-24v-48zm32 8v32h32v-32H96zm200-32c13.3 0 24 10.7 24 24v48c0 13.3-10.7 24-24 24h-48c-13.3 0-24-10.7-24-24v-48c0-13.3 10.7-24 24-24h48zm-8 64v-32h-32v32h32zM64 248c0-13.3 10.75-24 24-24h48c13.3 0 24 10.7 24 24v48c0 13.3-10.7 24-24 24H88c-13.25 0-24-10.7-24-24v-48zm32 8v32h32v-32H96zm200-32c13.3 0 24 10.7 24 24v48c0 13.3-10.7 24-24 24h-48c-13.3 0-24-10.7-24-24v-48c0-13.3 10.7-24 24-24h48zm-8 64v-32h-32v32h32zM64 512c-35.35 0-64-28.7-64-64V64C0 28.65 28.65 0 64 0h256c35.3 0 64 28.65 64 64v384c0 35.3-28.7 64-64 64H64zM32 64v384c0 17.7 14.33 32 32 32h64v-64c0-35.3 28.7-64 64-64s64 28.7 64 64v64h64c17.7 0 32-14.3 32-32V64c0-17.67-14.3-32-32-32H64c-17.67 0-32 14.33-32 32zm192 352c0-17.7-14.3-32-32-32s-32 14.3-32 32v64h64v-64zM432 0c8.8 0 16 7.164 16 16v16h160c17.7 0 32 14.33 32 32v128c0 17.7-14.3 32-32 32H448v272c0 8.8-7.2 16-16 16s-16-7.2-16-16V16c0-8.836 7.2-16 16-16zm16 192h160V64H448v128z" />
  </svg>
);

const SvgBuildingFlag = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgBuildingFlag;
