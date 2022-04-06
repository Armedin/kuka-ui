import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M240 96.04H16c-8.83 0-16 7.157-16 15.1C0 120.9 7.157 128 16 128h96v271.1c0 8.83 7.157 16 16 16 8.83 0 16-7.163 16-16V128h96c8.83 0 16-7.157 16-15.1 0-9.7-7.2-16.86-16-16.86zm389.4.97c-6.3-2.41-13.4-.38-17.7 4.79L464 279 316.3 101.8c-5.2-5.17-11.4-7.2-17.7-4.79-6.4 2.28-10.6 8.29-10.6 14.99v287.1c0 9.7 7.2 16.9 16 16.9s16-7.155 16-15.1V156.2l131.7 158c6.062 7.312 18.5 7.312 24.56 0L608 156.2V400c0 8.8 7.2 16 16 16s16-7.155 16-15.1V112c0-6.7-4.2-12.71-10.6-14.99z" />
  </svg>
);

const SvgTrademark = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgTrademark;
