import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M370.4 192.2c-12.3-20-32.5-32.2-55.5-32.2H197.1c-23 0-44.12 12.25-55.5 32.25L36.2 376.65C33.5 381.5 32 386.9 32 392.5V448c0 17.62 14.38 32 32 32h384c17.62 0 32-14.38 32-32v-55.5c0-5.625-1.5-11-4.25-15.88L370.4 192.2zM256 384c-39.75 0-72-32.25-72-72s32.3-72 72-72 72 32.25 72 72-32.2 72-72 72zm250.1-261C436.8 65 347.4 32 256 32S75.25 65 5.875 123C2.125 126.1 0 130.8 0 135.6V192c0 8.875 7.125 16 16 16h70.13c6 0 11.63-3.375 14.25-8.875L128 128c39.88-17.25 83.25-24 128-24s88.1 6.8 128 24l27.62 71.12c2.58 5.48 8.28 8.88 14.28 8.88H496c8.9 0 16-7.1 16-16v-56.4c0-4.8-2.1-9.5-5.9-12.6z" />
  </svg>
);

const SvgPhoneRotarySolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgPhoneRotarySolid;
