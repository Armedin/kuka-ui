import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M96 0c11.5 0 21.4 8.19 23.6 19.51L121.1 32h420.7c20.3 0 36.5 20.25 30.8 40.66l-35 124.24c-13.3-3.2-27.3-4.9-41.6-4.9-68.4 0-127.7 39-156.8 96H170.7l9.2 48h143c-2.8 10.4-3.8 21.1-3.8 32 0 5.4 1.1 10.7 1.6 16H159.1c-10.6 0-20.5-8.2-22.7-19.5L76.14 48H24C10.75 48 0 37.26 0 24 0 10.75 10.75 0 24 0h72zm32 464c0-26.5 21.5-48 48-48s48 21.5 48 48-21.5 48-48 48-48-21.5-48-48zm368-240c79.5 0 144 64.5 144 144s-64.5 144-144 144-144-64.5-144-144 64.5-144 144-144zm64 160c8.8 0 16-7.2 16-16s-7.2-16-16-16h-48v-48c0-8.8-7.2-16-16-16s-16 7.2-16 16v48h-48c-8.8 0-16 7.2-16 16s7.2 16 16 16h48v48c0 8.8 7.2 16 16 16s16-7.2 16-16v-48h48z" />
  </svg>
);

const SvgCartCirclePlusSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCartCirclePlusSolid;
