import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M472.5 0C494.3 0 512 17.7 512 39.53c0 9.2-3.2 18.11-9.1 25.2L396.3 193.5c-5.6 6.8-15.7 7.8-22.5 2.2-7.7-5.7-7.8-15.8-2.1-22.6L478.3 44.33c1.1-1.35 1.7-3.05 1.7-4.8 0-4.16-3.4-7.53-7.5-7.53H37.62C34.51 32 32 34.52 32 37.62c0 1.29.45 2.55 1.27 3.55L220.4 269.9c2.3 2.8 3.6 6.4 3.6 10.1v88l25.6 19.2c7.1 5.3 8.5 15.3 3.2 22.4-5.3 7.1-15.3 8.5-22.4 3.2l-32-24c-4-3-6.4-7.8-6.4-12.8v-90.3L8.503 61.44A37.62 37.62 0 0 1 0 37.62C0 16.84 16.84 0 37.62 0H472.5zm-63.7 335.4c-.4.7-.9 1.6-.7 2.7v1c0 .4 0 1.8 4.8 4.4 5.6 3 13.4 5.2 23.9 8.2h.1c9.3 2.7 21.2 6 30.6 11.6 10.2 6 20 16.1 19.6 32.2 1.4 18.3-8.8 30.4-20.8 37-5.8 3.1-12.1 5.1-18.3 6.2v10.8c0 8.9-7.2 16-16 16s-16-7.1-16-16v-11.4c-8.6-1.7-16.7-4.3-23.7-6.6-1.8-1.4-3.4-1.1-5.1-1.6-8.4-2.6-13.1-11.6-10.5-20 2.6-8.4 11.6-13.1 20.1-10.5 2 .6 3.9 1.2 5.8 1.8 11.4 3.6 19.5 6.5 29.9 5.9 6.7 1.1 13.8-.2 17.6-2.7 3.1-1.2 4.2-3.3 4-3.4 1.4-.8 2-2.1 1-4.5 0-1.4.7-3-3.9-5.7-6.1-3.1-12.9-5.4-23.1-8.3l-1.8-1.4c-8.8-1.6-19.7-4.7-28.6-9.4-9.9-5.3-20.6-14.7-21.6-30.7-1.2-18.8 10-30.9 21-37.2 6.6-3.1 12.8-5.1 18.9-6.3V288c0-8.8 7.2-16 16-16s16 7.2 16 16v9.4c6.3.9 12.3 2.2 17.9 3.6 8.5 2.2 13.8 10.8 11.6 19.4-2.1 7.7-10.8 13.8-19.4 11.7-9.2-2.3-19-4-26.3-4.1-6.2-.1-13.7 1.3-18.8 3.1-2.4 2.2-3.6 3.4-4.2 4.3zM288 368c0-79.5 64.5-144 144-144s144 64.5 144 144-64.5 144-144 144-144-64.5-144-144zm144 112c61.9 0 112-50.1 112-112s-50.1-112-112-112-112 50.1-112 112 50.1 112 112 112z" />
  </svg>
);

const SvgFilterCircleDollar = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgFilterCircleDollar;