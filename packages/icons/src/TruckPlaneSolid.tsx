import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M256 86.06V411.5l.1.1c1.2 22.2 13.7 41.3 31.9 51.8V496c0 5.2.8 10.3 2.4 14.1L200 480.9l-90.9 30.3c-4.9 1.6-10.28-.1-14.46-3.1-4.17-3-6.64-7-6.64-12.1v-32c0-4.9 2.21-9.5 6-12.5l50-40v-81.2l-123.4 37c-4.85 1.5-10.09.6-14.151-2.5C2.391 361.8 0 357.1 0 352v-64c0-5.6 2.949-10.8 7.768-13.7L144 192.5V86.06C144 54.68 169.4 0 200 0c31.5 0 56 54.68 56 86.06zM288 176c0-26.5 21.5-48 48-48h256c26.5 0 48 21.5 48 48v224c0 20.9-13.4 38.7-32 45.3V488c0 13.3-10.7 24-24 24h-16c-13.3 0-24-10.7-24-24v-40H384v40c0 13.3-10.7 24-24 24h-16c-13.3 0-24-10.7-24-24v-42.7c-18.6-6.6-32-24.4-32-45.3V176zm79.8 78.7L352 304h224l-15.8-49.3c-3.3-8.7-11.3-14.7-20.5-14.7H388.3c-9.2 0-17.2 6-20.5 14.7zM568 400c13.3 0 24-10.7 24-24s-10.7-24-24-24-24 10.7-24 24 10.7 24 24 24zm-208-48c-13.3 0-24 10.7-24 24s10.7 24 24 24 24-10.7 24-24-10.7-24-24-24z" />
  </svg>
);

const SvgTruckPlaneSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgTruckPlaneSolid;
