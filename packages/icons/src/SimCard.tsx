import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="m365.3 109.3-90.51-90.51C262.7 6.742 246.5 0 229.5 0H64C28.8 0 0 28.8 0 64v384c0 35.2 28.8 64 64 64h256c35.2 0 64-28.8 64-64V154.5c0-17-6.7-33.2-18.7-45.2zM352 448c0 17.6-14.4 32-32 32H64c-17.6 0-32-14.4-32-32V64c0-17.6 14.4-32 32-32h165.5a32.02 32.02 0 0 1 22.63 9.373l90.5 90.5C348.6 137.9 352 146 352 154.5V448zm-80-256H112c-26.5 0-48 21.5-48 48v160c0 26.5 21.5 48 48 48h160c26.5 0 48-21.5 48-48V240c0-26.5-21.5-48-48-48zm-104 32h48v40h-48v-40zm-72 16c0-8.7 7.3-16 16-16h24v40H96v-24zm40 176h-24c-8.7 0-16-7.2-16-16v-24h40v40zm80 0h-48v-40h48v40zm72-16c0 8.75-7.25 16-16 16h-24v-40h40v24zm0-56H96v-48h192v48zm0-80h-40v-40h24c8.8 0 16 7.3 16 16v24z" />
  </svg>
);

const SvgSimCard = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgSimCard;
