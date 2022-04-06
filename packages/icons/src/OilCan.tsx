import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M272 96v64h96.9c9.9 0 19.7 2.3 28.6 6.8L448 192l167-35.8c18.1-3.9 30.7 17.6 18.5 31.5L451.1 394.3c-13 13.8-29.6 21.7-48 21.7H144c-26.5 0-48-21.5-48-48v-28l-64.85-24.3c-18.74-7-31.15-25-31.15-45V208c0-26.5 21.49-48 48-48h192V96h-64c-8.8 0-16-7.16-16-16s7.2-16 16-16h160c8.8 0 16 7.16 16 16s-7.2 16-16 16h-64zm111.2 99.4c-4.4-2.2-9.3-3.4-14.3-3.4H128v176c0 8.8 7.2 16 16 16h259.1c9.2 0 17.9-3.9 24-10.8l156.7-177.6-140.1 30-60.5-30.2zM96 305.8V192H48c-8.84 0-16 7.2-16 16v62.7c0 6.7 4.14 12.7 10.38 15L96 305.8z" />
  </svg>
);

const SvgOilCan = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgOilCan;
