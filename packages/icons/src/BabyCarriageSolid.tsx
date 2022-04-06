import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M255.1 192H.14C2.74 117.9 41.34 52.95 98.98 14.1c13.22-8.925 30.82-4.316 39.92 8.82L255.1 192zM384 160c0-35.3 28.7-64 64-64h32c17.7 0 32 14.3 32 32s-14.3 32-32 32h-32v64c0 25.2-5.8 50.2-17.1 73.5-11.2 23.3-27.7 44.4-48.5 62.3-20.8 17.8-45.5 31.9-72.7 41.6-27.2 9.6-56.3 14.6-86.6 14.6-28.5 0-57.6-5-84.8-14.6-27.2-9.7-51.89-23.8-72.69-41.6-20.8-17.9-37.3-39-48.56-62.3C5.794 274.2 0 249.2 0 224h384v-64zM31.1 464c0-26.5 22.39-48 48-48 27.4 0 48 21.5 48 48s-20.6 48-48 48c-25.61 0-48-21.5-48-48zm384.9 0c0 26.5-21.5 48-48 48s-48-21.5-48-48 21.5-48 48-48 48 21.5 48 48z" />
  </svg>
);

const SvgBabyCarriageSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgBabyCarriageSolid;
