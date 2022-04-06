import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M96 256c0-35.3 28.7-64 64-64s64 28.7 64 64-28.7 64-64 64-64-28.7-64-64zm64 32c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32zm256-32c0 35.3-28.7 64-64 64s-64-28.7-64-64 28.7-64 64-64 64 28.7 64 64zm-64-32c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32zm63.1 174.9c0 .4.9.7.9 1.1v64c0 26.5-21.5 48-48 48H144c-26.5 0-48-21.5-48-48v-64c0-.4 0-.7.01-1.1C37.48 357.8 0 294.7 0 224 0 100.3 114.6 0 256 0s256 100.3 256 224c0 70.7-37.5 133.8-96.9 174.9zm-32 .7c.7-10.7 5.8-20.8 14.5-26.9 51.3-36 82.4-89.9 82.4-148.7 0-102.2-96.1-192-224-192S32 121.8 32 224c0 58.8 31.11 112.7 82.4 148.7 8.7 6.1 13.8 16.2 13.6 26.9V464c0 8.8 7.2 16 16 16h48v-48c0-8.8 7.2-16 16-16s16 7.2 16 16v48h64v-48c0-8.8 7.2-16 16-16s16 7.2 16 16v48h48c8.8 0 16-7.2 16-16v-64l-.9-.4z" />
  </svg>
);

const SvgSkull = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgSkull;