import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M480 179.6c18.6 8.8 32 32.5 32 60.4s-13.4 51.6-32 60.4V448c0 12.9-7.8 24.6-19.8 29.6-11.9 4.9-25.7 2.2-34.8-7l-43.7-44.5c-48-48-113.1-74.1-181-74.1H192v128c0 17.7-14.3 32-32 32H96c-17.67 0-32-14.3-32-32V352c-35.35 0-64-28.7-64-64v-96c0-35.3 28.65-64 64-64h136.7c67.9 0 133-27 181-74.98l43.7-43.647c9.1-9.151 22.9-11.889 34.8-6.936C472.2 7.39 480 19.06 480 32v147.6zM200.7 192H192v96h8.7c79.8 0 156.5 29.8 215.3 83.3V108.7C357.2 162.2 280.5 192 200.7 192z" />
  </svg>
);

const SvgBullhornSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgBullhornSolid;
