import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M512 232v47.1c0 22.06-17.97 39.1-40.03 39.1l-280.27.9-.151 39.1c0 15.91-9.438 30.31-24 36.65-14.62 6.375-31.56 3.5-43.22-7.343L12.23 285.3C4.072 277.767-.01 266.88 0 255.99c.002-10.89 4.08-21.79 12.23-29.29l112.1-103.1c10.77-11.8 28.57-15.5 43.17-8.3 14.56 6.343 24 20.75 24 36.65l.2 40.05H472c22 0 40 17.9 40 40zM31.42 256c0 1.312.344 3.781 2.562 5.844l112.1 104c5.109 4.7 13.47 1.142 13.47-5.875V287.1h312.5c4.348 0 7.948-2.7 7.948-8V232c0-4.406-3.594-7.1-8.031-7.1L159.5 224v-72c0-7.022-8.363-10.57-13.47-5.875L33.98 250.1a8.125 8.125 0 0 0-2.56 5.9z" />
  </svg>
);

const SvgLeftLong = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgLeftLong;
