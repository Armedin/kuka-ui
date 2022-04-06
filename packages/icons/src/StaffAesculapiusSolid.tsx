import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M222.5 48H288c53 0 96 42.98 96 96 0 53-43 96-96 96h-40v-80h40c8.8 0 16-7.2 16-16s-7.2-16-16-16h-68l-4.5 144H256c53 0 96 42.1 96 96 0 53-43 96-96 96h-16v-80h16c8.8 0 16-7.2 16-16s-7.2-16-16-16h-43.9l-3.6 144c-.3 8.9-7.6 16-17.4 16-8 0-15.3-7.1-15.6-16l-1-32h-39.4c-21.2 0-40-17.9-40-40s18.8-40 40-40h36l-1-32h-19c-52.12 0-96-43-96-96 0-47.6 35.5-87.1 80-94.7V256c0 8.8 8.1 16 16 16h17.4L164 128h-41.4c-9 18.9-28.26 32-50.6 32H56c-30.93 0-56-25.1-56-56 0-30.93 25.07-56 56-56h105.5l-1.4-16.02v-1.93C161.5 13.43 175.1 0 192 0s30.5 13.43 31 30.05v1.93L222.5 48zM79.1 96c0-8.84-6.26-16-16-16-7.94 0-16 7.16-16 16 0 8.8 8.06 16 16 16 9.74 0 16-7.2 16-16z" />
  </svg>
);

const SvgStaffAesculapiusSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgStaffAesculapiusSolid;