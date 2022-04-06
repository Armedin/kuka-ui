import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M256 464V277.1c0-13.4 5.6-26.3 15.6-35.4l144-132c18.3-16.79 46.5-16.79 64.8 0l144 132c10 9.1 15.6 22 15.6 35.4V464c0 26.5-21.5 48-48 48H303.1c-25.6 0-48-21.5-48-48h.9zm168-192c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h48c13.3 0 24-10.7 24-24v-48c0-13.3-10.7-24-24-24h-48zM72 0c13.25 0 24 10.75 24 24v72h32V24c0-13.25 10.7-24 24-24h48c13.3 0 24 10.75 24 24v72h32V24c0-13.25 10.7-24 24-24h48c13.3 0 24 10.75 24 24v100.6l-102.1 93.5c-16.5 15.2-25.9 36.6-25.9 59V464c0 18 5.1 34.6 15.1 48H112c-26.51 0-48-21.5-48-48V288l-45.25-45.3C6.743 230.7 0 214.5 0 197.5V24C0 10.75 10.75 0 24 0h48zm104 160c-22.1 0-40 17.9-40 40v24c0 8.8 7.2 16 16 16h48c8.8 0 16-7.2 16-16v-24c0-22.1-17.9-40-40-40z" />
  </svg>
);

const SvgHouseTurretSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgHouseTurretSolid;
