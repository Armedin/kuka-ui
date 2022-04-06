import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M255.1 320c-7.9 0-15.1 7.2-15.1 16v112c0 17.66-14.34 32-32 32s-32-14.34-32-32v-16c0-8.8-7.2-16-16-16s-16 7.156-16 16v16c0 35.28 28.72 64 63.1 64s64.9-28.7 64.9-64V336c0-8.8-7.2-16-16.9-16zm16.7-287.22c.1-.28.2-.5.2-.78V16c0-8.844-7.157-16-16-16s-16 7.156-16 16v16c0 .275.143.504.156.777C106.4 40.77 0 148.4 0 280c0 4.4 3.594 8 8 8h496c4.4 0 8-3.6 8-8 0-131.6-106.4-239.23-240.2-247.22zM33.37 256C45.79 148.2 140.9 64 256 64s210.2 84.15 222.6 192H33.37z" />
  </svg>
);

const SvgUmbrellaSimple = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgUmbrellaSimple;
