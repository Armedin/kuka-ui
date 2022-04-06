import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M322.6 192c-20.2 0-106.8 2-162.6 86v-86c0-53-43-96-96-96-17.62 0-32 14.4-32 32s14.38 32 32 32 32 14.38 32 32v256c0 35.25 28.75 64 64 64h176c8.875 0 16-7.125 16-15.1V480c0-17.62-14.38-32-32-32h-32l128-96v144c0 8.875 7.125 16 16 16h32c8.875 0 16-7.125 16-16V289.9c-10.25 2.625-20.88 4.5-32 4.5-61.8 0-113.5-44-125.4-102.4zM480 96h-64l-64-64v134.4c0 53 43 95.1 96 95.1s96-42.1 96-95.1V32l-64 64zm-72 80c-8.875 0-16-7.125-16-16s7.125-16 16-16 16 7.125 16 16-7.1 16-16 16zm80 0c-8.875 0-16-7.125-16-16s7.125-16 16-16 16 7.125 16 16-7.1 16-16 16z" />
  </svg>
);

const SvgCatSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCatSolid;
