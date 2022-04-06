import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M208-.002c8.8 0 16 7.164 16 15.102 0 9.73-7.2 16-16 16H16c-8.836 0-16-6.27-16-16C0 7.162 7.164-.002 16-.002h192zm0 63.102c8.8 0 16 8.06 16 16 0 9.73-7.2 16-16 16h-80v112c0 9.7-7.2 16-16 16s-16-6.3-16-16v-112H16c-8.836 0-16-6.27-16-16 0-7.94 7.164-16 16-16h192zM473.7 4.136C493.5.176 512 15.32 512 35.51V167.1h-.2c.1 2.2.2 3.6.2 4 0 29.6-28.7 52-64 52s-64-22.4-64-52c0-27.8 28.7-52 64-52 11.7 0 22.6 3.4 32 7V35.52l-128 25.6V199.1h-.2c.1 2.2.2 3.6.2 4 0 29.6-28.7 52-64 52s-64-22.4-64-52c0-27.8 28.7-52 64-52 11.7 0 22.6 3.4 32 7V61.12c0-15.26 10.8-28.39 25.7-31.38l128-25.604zm-.6 155.964c-5.6-4.5-14.3-9-25.1-9s-19.5 4.5-25.1 9c-5.4 4.4-6.9 8.8-6.9 11 0 4 1.5 8.4 6.9 12.8 5.6 4.5 14.3 7.2 25.1 7.2s19.5-2.7 25.1-7.2c5.4-4.4 6.9-8.8 6.9-12.8 0-2.2-1.5-6.6-6.9-11zm-160 32c-5.6-4.5-14.3-9-25.1-9s-19.5 4.5-25.1 9c-5.4 4.4-6.9 8.8-6.9 11 0 4 1.5 8.4 6.9 12.8 5.6 4.5 14.3 7.2 25.1 7.2s19.5-2.7 25.1-7.2c5.4-4.4 6.9-8.8 6.9-12.8 0-2.2-1.5-6.6-6.9-11zM288 336c0-26.5 21.5-48 48-48s48 21.5 48 48-21.5 48-48 48-48-21.5-48-48zm48 16c8.8 0 16-7.2 16-16s-7.2-16-16-16-16 7.2-16 16 7.2 16 16 16zm171.3-59.3c6.3 6.2 6.3 16.4 0 22.6l-192 192c-6.2 6.3-16.4 6.3-22.6 0-6.3-6.2-6.3-16.4 0-22.6l192-192c6.2-6.3 16.4-6.3 22.6 0zM512 464c0 26.5-21.5 48-48 48s-48-21.5-48-48 21.5-48 48-48 48 21.5 48 48zm-48-16c-8.8 0-16 7.2-16 16s7.2 16 16 16 16-7.2 16-16-7.2-16-16-16zM84.93 256c32.67 0 59.07 26.4 59.07 59.1 0 18.1-8.3 35.2-22.6 46.4l-20.1 15.9 49.8 45.3 47.3-35.5c7.1-5.3 17.1-3.9 22.4 3.2 5.3 7.1 3.9 17.1-3.2 22.4l-42.4 31.8 43.6 39.6c6.5 5.9 7 16 1 22.6-5.9 6.5-16 7-22.6 1l-48-43.7-46.8 35.1A64.056 64.056 0 0 1 64 512c-35.48 0-64-29.1-64-64.3 0-20.6 9.039-38.6 24.63-50.8l27.11-21.3L35.76 361c-12.58-11.4-20.66-27.6-20.66-44.6 0-33.4 27.93-61.3 61.27-61.3l8.56.9zM112 315.1c0-15-12.12-27.1-27.07-27.1h-8.56C60.7 288 48 300.7 48 316.4c0 8 3.37 14.7 9.29 21l19.97 18.1 24.44-19.1c6.5-5.2 10.3-13 10.3-21.3zM32 447.7c0 17.8 14.46 32.3 32 32.3 6.92 0 13.66-2.2 19.2-6.4l41.8-31.4-49.25-44.8L44.4 422c-7.79 6.2-12.4 15.7-12.4 25.7z" />
  </svg>
);

const SvgSymbols = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgSymbols;
