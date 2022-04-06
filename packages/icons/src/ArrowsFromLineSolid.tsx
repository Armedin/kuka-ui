import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M160 127.1c8.188 0 16.38-3.125 22.62-9.375L192 109.2v50.75c0 17.69 14.31 32.01 32 32.01s32-14.32 32-32.01V109.2l9.375 9.375C271.6 124.8 279.8 127.1 288 127.1c18.28 0 32-14.94 32-31.99 0-8.191-3.125-16.39-9.375-22.64L246.7 9.374C238.6 1.3 228.9 0 223.1 0c-4.898 0-14.6 1.273-22.67 9.374L137.4 73.34c-6.3 6.25-9.4 14.45-9.4 22.64 0 17.02 13.7 31.12 32 31.12zm128 256c-8.188 0-16.38 3.127-22.62 9.377L256 402.7v-50.76c0-17.69-14.31-31.1-32-31.1s-32 14.31-32 31.1v50.76l-9.375-9.375C176.4 387.1 168.2 383.1 160 383.1c-18.28 0-32 14.95-32 32.01 0 8.188 3.125 16.37 9.375 22.62l63.96 63.97A30.458 30.458 0 0 0 224 512c4.848 0 14.65-1.371 22.67-9.414l63.96-63.97C316.9 432.4 320 424.2 320 415.1c0-16.2-13.7-32-32-32zm128-160H32c-17.69 0-32 14.33-32 32.01s14.31 31.99 32 31.99h384c17.69 0 32-14.3 32-31.99s-14.3-32.01-32-32.01z" />
  </svg>
);

const SvgArrowsFromLineSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgArrowsFromLineSolid;
