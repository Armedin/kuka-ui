import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M512 256c0-7.885-2.484-17.16-10.1-26.56-4.367-5.391-4.375-13.44-.002-18.83C509.5 201.2 512 191.9 512 184c0-8.004-2.57-17.46-10.35-27.02-5.564 9.188-13.18 17.23-22.29 24.3.24.92.64 1.82.64 2.72 0 20.56-60.38 38.09-145.2 44.92-8.4.68-14.8 7.68-14.8 16.08 0 9.41 8.059 16.84 17.44 16.16 58.6-4.232 97.88-13.1 124.2-23.82C473.1 243.1 480 249.4 480 256c0 21.19-64.15 39.13-153.1 45.49-6.047.434-11.34 4.203-13.69 9.793l-.11.317c-4.668 10.97 3.912 22.98 15.81 22.24 63.32-3.936 105.3-13.07 132.9-24.29C473.1 315.3 480 321.4 480 328c0 26.51-100.3 48-224 48-20.53 0-40.36-.613-59.24-1.727-6.139-.363-11.82 2.816-14.82 8.186-.063.111-.125.223-.19.334-5.803 10.25 1.217 23.06 12.98 23.68C213.3 407.4 233.6 408 256 408c106.1 0 168.8-11.41 205.8-26.54C473.1 387.2 480 393.4 480 400c0 26.51-100.3 48-224 48S32 426.51 32 400c0-5.303 4.17-10.39 11.58-15.16C33.68 368.3 32 348.3 32 344V180.5c-9.71-7.7-16.62-15.8-21.48-23.7C2.613 166.4 0 175.9 0 184c0 7.879 2.643 17.15 10.3 26.54 4.412 5.41 4.412 13.51 0 18.92C2.643 238.9 0 248.1 0 256c0 7.879 2.643 17.15 10.3 26.54 4.412 5.41 4.412 13.51 0 18.92C2.643 310.9 0 320.1 0 328c0 7.889 2.432 17.18 10.04 26.58 4.357 5.389 4.354 13.43.004 18.82C2.455 382.8 0 392.1 0 400c0 29.88 33.26 80 256 80s256-50.12 256-80c0-7.859-2.469-17.1-10.06-26.45-4.381-5.395-4.406-13.46-.037-18.86C509.5 345.2 512 335.9 512 328c0-7.773-2.52-16.89-9.984-26.14-4.414-5.467-4.504-13.6-.086-19.06C509.6 273.3 512 263.9 512 256zM64 154.4v179.1c0 24.39 17.49 46.16 41.69 49.26C134.1 387.3 160 364.5 160 336V201.8c0-9.525 8.318-16.85 17.78-15.7.12.1-.68.1.32.1 7.9.9 13.9 7.7 13.9 15.7V288c0 28.54 25.04 51.35 54.31 47.59C270.5 332.5 288 310.7 288 286.3v-97.2c97.97-4.531 192-30.08 192-79.2 0-105-448-105-448 0 0 17.5 10.75 32.1 32 44.5zm144-90.38h96c8.836 0 16 7.162 16 16 0 8.836-7.164 15.1-16 15.1h-96c-8.836 0-16-7.161-16-15.1 0-8.84 7.2-16 16-16zm-46.4 6.29c-.7 3.12-1.6 6.16-1.6 9.69 0 26.5 21.5 48 48 48h96c26.5 0 48-21.5 48-48 0-3.529-.885-6.566-1.611-9.691C412 80.55 448 98.99 448 110.8c0 14.81-62.25 45.08-176.4 47.75-8.7.15-15.6 7.25-15.6 15.95V288c0 9.723-8.719 17.44-18.72 15.77C229.4 302.5 224 295 224 287.1V173c0-8.334-6.396-15.34-14.71-15.95-22.19-1.65-43.09-4.35-62.19-8.15-9.4-3.1-19.1 3.9-19.1 13.8V336c0 9.723-8.719 17.44-18.72 15.77C101.4 350.5 96 343 96 335.1V144.8c0-6.111-3.48-11.69-8.969-14.38C68.84 121.5 64 113.9 64 110.8c0-11.81 35.96-30.25 97.6-40.49z" />
  </svg>
);

const SvgPancakes = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgPancakes;