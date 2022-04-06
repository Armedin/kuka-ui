import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M243.4 2.587c8-3.45 17.2-3.45 25.2 0l224 96.003c14 6.01 21.8 21.01 18.7 35.81-3 14.9-16.1 24.7-32.2 25.6v8c0 13.3-9.8 24-24 24h-400c-12.36 0-24-10.7-24-24v-8c-14.29-.9-27.392-10.7-30.447-25.6-3.055-14.8 4.776-29.8 18.737-35.81L243.4 2.587zM256 128c17.7 0 32-14.3 32-32 0-17.67-14.3-32-32-32s-32 14.33-32 32c0 17.7 14.3 32 32 32zM127.1 416h40V224h64v192H280V224h64v192h40V224h64v196.3c.6.3 1.2-.2 1.8 1.1l48 32c11.7 7.8 16.9 22.4 12.8 35.9-4.1 13.5-16.5 22.7-30.6 22.7H31.1c-13.2 0-25.642-9.2-29.728-22.7-4.087-13.5 1.143-28.1 12.878-35.9l48-32c.57-1.3 1.16-.8.85-1.1V224h64v192z" />
  </svg>
);

const SvgBuildingColumnsSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgBuildingColumnsSolid;
