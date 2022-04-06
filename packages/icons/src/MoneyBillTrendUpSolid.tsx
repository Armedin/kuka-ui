import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M470.7 9.441c3 3.049 5.3 6.559 6.9 10.309 1.5 3.75 1.5 7.85 2.4 12.15V128c0 17.7-14.3 32-32 32s-32-14.3-32-32v-18.7L310.6 214.6c-11.8 11.9-30.7 12.6-43.4 1.7l-92.1-78.2-90.28 78.2c-13.41 11.5-33.62 9.9-45.12-3.5s-9.94-33.6 3.47-45.1l112.03-96c12-10.27 29.6-10.27 41.6 0l89.5 76.7L370.7 64H352c-17.7 0-32-14.33-32-32s14.3-32 32-32h95.1c9.7 0 17.7 3.554 23.5 9.305l.1.136zM0 304c0-26.5 21.49-48 48-48h416c26.5 0 48 21.5 48 48v160c0 26.5-21.5 48-48 48H48c-26.51 0-48-21.5-48-48V304zm48 160h48c0-26.5-21.49-48-48-48v48zm0-160v48c26.51 0 48-21.5 48-48H48zm416 112c-26.5 0-48 21.5-48 48h48v-48zm-48-112c0 26.5 21.5 48 48 48v-48h-48zm-160 16c-35.3 0-64 28.7-64 64s28.7 64 64 64 64-28.7 64-64-28.7-64-64-64z" />
  </svg>
);

const SvgMoneyBillTrendUpSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgMoneyBillTrendUpSolid;
