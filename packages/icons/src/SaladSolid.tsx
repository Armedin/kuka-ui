import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M495.8 288H16.19C7.055 288-.7 295.8.05 304.9c6.759 76.38 58.28 139.4 128.1 163.9V480c0 17.62 14.45 32 32.09 32h192.2c17.65 0 32.04-14.38 32.04-32v-11.5c69.46-24.62 120.8-87.5 127.4-163.6.82-9.1-6.78-16.9-16.08-16.9zM320 224c0 11.28 2.305 21.95 5.879 32h180.2C509.7 245.9 512 235.3 512 224c0-53.02-42.98-96-96-96s-96 42.1-96 96zM96.09 256h73.29l-84.69-84.7c-6.25-6.25-6.25-16.38 0-22.62s16.38-6.25 22.62 0L208 249.4V112c0-8.8 7.2-16 16-16s16 7.156 16 16v144h52.66c-2.875-10.38-4.375-21.12-4.5-32 .125-70.63 57.39-127.9 128-128 2.625 0 5.127.625 7.752.75C406.3 76.88 380.9 64 352.2 64a95.562 95.562 0 0 0-25.23 3.786C309.3 26.66 268.9 0 224.1 0c-44.7 0-85.2 26.62-102.9 67.75-8.1-2.37-16.6-3.62-25.11-3.75C43.07 64 .05 107 .05 160s43.02 96 96.04 96z" />
  </svg>
);

const SvgSaladSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgSaladSolid;
