import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M384 0H128C92.65 0 64 28.65 64 64h384c0-35.35-28.7-64-64-64zm208 128c-26.5 0-48 21.5-48 48 0 14.16 6.246 26.76 16 35.54V416c0 17.66-14.34 32-32 32h-80v-32c35.35 0 64-28.65 64-64V160c0-35.35-28.65-64-64-64H64c-35.35 0-64 28.7-64 64v192c0 35.35 28.65 64 64 64v32c0 35.35 28.65 64 64 64h400c52.94 0 96-43.06 96-96V211.5c9.8-8.7 16-21.3 16-35.5 0-26.5-21.5-48-48-48zm-425.4 80.1-40 112c-3.5 9.8-12.8 15.9-22.6 15.9a23.44 23.44 0 0 1-8.062-1.406c-12.5-4.438-19-18.19-14.53-30.66L109.9 224H80c-13.25 0-24-10.7-24-24s10.75-24 24-24h64c7.812 0 15.12 3.781 19.62 10.19 4.48 6.41 5.58 14.51 2.98 21.91zm144 0-40 112c-3.5 9.8-12.8 15.9-22.6 15.9a23.44 23.44 0 0 1-8.062-1.406c-12.5-4.438-19-18.19-14.53-30.66L253.9 224H224c-13.2 0-24-10.7-24-24s10.8-24 24-24h64c7.812 0 15.12 3.781 19.62 10.19 4.48 6.41 5.58 14.51 2.98 21.91zM392 336a23.44 23.44 0 0 1-8.062-1.406c-12.5-4.438-19-18.19-14.53-30.66L397.9 224H368c-13.25 0-24-10.75-24-24s10.8-24 24-24h64c7.812 0 15.12 3.781 19.62 10.19a23.947 23.947 0 0 1 2.969 21.88l-40 112C411.1 329.9 401.8 336 392 336z" />
  </svg>
);

const SvgSlotMachineSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgSlotMachineSolid;
