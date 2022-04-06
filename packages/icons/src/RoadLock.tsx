import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M422.4 32c26.9 0 50.9 16.79 60.1 42.04l31.8 86.76c-10.9 1.4-22.2 4.3-31 8.5l-30.8-84.28C447.9 72.4 435.9 64 422.4 64H336v48c0 8.8-7.2 16-16 16s-16-7.2-16-16V64h-86.4c-13.5 0-25.5 8.4-30.1 21.02L70.59 405c-7.63 20.9 7.82 43 30.01 43H304v-48c0-8.8 7.2-16 16-16s16 7.2 16 16v48h48v32H100.6c-44.41 0-75.33-44.2-60.07-86L157.5 74.04C166.7 48.79 190.7 32 217.6 32h204.8zM336 304c0 8.8-7.2 16-16 16s-16-7.2-16-16v-96c0-8.8 7.2-16 16-16s16 7.2 16 16v96zm192-112c44.2 0 80 35.8 80 80v48c17.7 0 32 14.3 32 32v128c0 17.7-14.3 32-32 32H448c-17.7 0-32-14.3-32-32V352c0-17.7 14.3-32 32-32v-48c0-44.2 35.8-80 80-80zm0 32c-26.5 0-48 21.5-48 48v48h96v-48c0-26.5-21.5-48-48-48zm-80 128v128h160V352H448z" />
  </svg>
);

const SvgRoadLock = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgRoadLock;
