import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M256 0v128h128L256 0zm-32 128V0H48C21.49 0 0 21.49 0 48v416c0 26.5 21.49 48 48 48h288c26.51 0 48-21.49 48-48V160H256.9c-18.6 0-32.9-14.3-32.9-32zM64 72c0-4.37 3.63-8 8-8h80c4.4 0 8 3.63 8 8v16c0 4.38-3.6 8-8 8H72c-4.37 0-8-3.62-8-8V72zm0 64c0-4.4 3.63-8 8-8h80c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H72c-4.37 0-8-3.6-8-8v-16zm240 248c8.875 0 16 7.125 16 16s-7.1 16-16 16h-47.25c-16.38 0-31.25-9.125-38.63-23.88-2.875-5.875-8-6.5-10.12-6.5s-7.25.625-10 6.125l-7.75 15.38C187.6 412.6 181.1 416 176 416h-1.1c-6.5-.5-12-4.75-14-11L144 354.6l-10.6 31.9C127.5 404.1 111 416 92.38 416H80c-8.87 0-16-7.1-16-16s7.13-16 16-16h12.38c4.875 0 9.125-3.125 10.62-7.625l18.25-54.63C124.5 311.9 133.6 305.3 144 305.3s19.5 6.625 22.75 16.5l13.88 41.63c19.75-16.25 54.13-9.75 66 14.12 2 4 6 6.5 10.12 6.5H304z" />
  </svg>
);

const SvgFileContractSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgFileContractSolid;
