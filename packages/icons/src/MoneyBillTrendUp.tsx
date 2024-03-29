import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M352 16c0-8.836 7.2-16 16-16h96c8.8 0 16 7.164 16 16v96c0 8.8-7.2 16-16 16s-16-7.2-16-16V54.63L299.3 203.3c-5.9 5.9-15.4 6.3-21.7.8l-101.6-87-101.59 87c-6.71 5.8-16.81 5-22.56-1.7s-4.97-16.8 1.74-22.5L165.6 83.85c6-5.13 14.8-5.13 20.8 0l100.8 86.35L425.4 32H368c-8.8 0-16-7.16-16-16zm-32 368c0 35.3-28.7 64-64 64s-64-28.7-64-64 28.7-64 64-64 64 28.7 64 64zm-64-32c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32zm208-96c26.5 0 48 21.5 48 48v160c0 26.5-21.5 48-48 48H48c-26.51 0-48-21.5-48-48V304c0-26.5 21.49-48 48-48h416zm16 48c0-8.8-7.2-16-16-16h-32c0 26.5 21.5 48 48 48v-32zM32 368v32c44.18 0 80 35.8 80 80h288c0-44.2 35.8-80 80-80v-32c-44.2 0-80-35.8-80-80H112c0 44.2-35.82 80-80 80zm432 112c8.8 0 16-7.2 16-16v-32c-26.5 0-48 21.5-48 48h32zM32 464c0 8.8 7.16 16 16 16h32c0-26.5-21.49-48-48-48v32zm16-176c-8.84 0-16 7.2-16 16v32c26.51 0 48-21.5 48-48H48z" />
  </svg>
);

const SvgMoneyBillTrendUp = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgMoneyBillTrendUp;
