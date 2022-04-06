import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M64 224h352c35.38 0 64-28.62 64-64 0-70.75-57.25-128-128-128 23.62 23.62 6.875 64-26.5 64H64c-35.37 0-64 28.6-64 64s28.63 64 64 64zm496 192H448V264c0-4.4-3.6-8-8-8h-16c-4.4 0-8 3.6-8 8v152h-32V264c0-4.4-3.6-8-8-8h-16c-4.4 0-8 3.6-8 8v152h-32V264c0-4.4-3.6-8-8-8h-16c-4.4 0-8 3.6-8 8v152h-32V264c0-4.4-3.6-8-8-8h-16c-4.4 0-8 3.6-8 8v152h-32V264c0-4.4-3.6-8-8-8h-16c-4.4 0-8 3.6-8 8v152h-32V264c0-4.4-3.6-8-8-8h-16c-4.37 0-8 3.6-8 8v152H64V264c0-4.4-3.62-8-8-8H40c-4.37 0-8 3.6-8 8v152H16c-8.875 0-16 7.1-16 16v32c0 8.9 7.125 16 16 16h544c8.875 0 16-7.125 16-16v-32c0-8.9-7.1-16-16-16z" />
  </svg>
);

const SvgToothbrushSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgToothbrushSolid;
