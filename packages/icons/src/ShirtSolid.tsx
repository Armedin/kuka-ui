import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M640 162.8c0 6.917-2.293 13.88-7.012 19.7l-49.96 61.63c-6.32 7.796-15.62 11.85-25.01 11.85-7.01 0-14.07-2.262-19.97-6.919L480 203.3V464c0 26.51-21.49 48-48 48H208c-26.5 0-48-21.5-48-48V203.3l-58.9 45.8c-5.05 4.6-12.11 6-19.12 6-9.388 0-18.69-4.057-25.01-11.85L7.012 182.5A31.16 31.16 0 0 1 0 162.8c0-9.262 4.11-18.44 12.01-24.68l135-106.6C159.8 21.49 175.7 16 191.1 16h34.5c7.7 45.36 46.9 80 94.4 80s86.73-34.64 94.39-80h33.6c16.35 0 32.22 5.49 44.99 15.57l135 106.6C635.9 144.4 640 153.6 640 162.8z" />
  </svg>
);

const SvgShirtSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgShirtSolid;
