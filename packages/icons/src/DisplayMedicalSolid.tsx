import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M528 0H48C21.5 0 0 21.5 0 48v320c0 26.5 21.5 48 48 48h192l-16 48h-72c-13.2 0-24 10.8-24 24s10.8 24 24 24h272c13.25 0 24-10.75 24-24s-10.75-24-24-24h-72l-16-48h192c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zm-16 352H64V64h448v288zM208 239.1h48v48c0 9.7 7.2 16.9 16 16.9h32c8.801 0 16-7.202 16-16v-48h48c8.8-.9 16-7.2 16-16v-32.9c0-7.9-7.2-15.1-16-15.1h-48v-48c0-8.801-7.199-16-16-16h-32c-8.8 0-16 7.2-16 16v48h-48c-8.8 0-16 7.2-16 15.1V224c0 8.8 7.2 15.1 16 15.1z" />
  </svg>
);

const SvgDisplayMedicalSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgDisplayMedicalSolid;
