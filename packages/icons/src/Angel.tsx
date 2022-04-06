import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M240 144c0 44.25 35.75 80 79.1 80s79.1-35.75 79.1-80-33.9-80-78.2-80-80 35.75-80 80zm127.1 0c0 26.5-21.5 48-48 48s-48-21.5-48-48 21.5-48 48-48 48 21.5 48 48zm237.4 320.6-38.25-78.62c-7.502-15.75-7.502-34.38 0-50.13 16.75-34.13 25.63-36.5 25.63-71.75 0-46.88-43.13-88-92.38-88-23 0-44.5 9.125-60.76 25.62l-67.51 68.13C355.1 261 338.4 256.1 320 256.1s-35.9 4.9-51.3 13.7l-67.51-68C185.1 185.3 163.5 176 140.5 176c-49.26 0-92.38 41.13-92.38 88 0 35.38 9.002 37.88 25.63 71.75 7.502 15.75 7.502 34.5 0 50.13l-38.13 78.75C23.83 488.5 42.96 512 64.58 512H575.4c22.2 0 40.5-24.1 29.1-47.4zM64.58 480l37.88-80.13c11.88-24.5 11.88-53.63 0-78.13C84.59 285 80.21 289.9 80.21 264c0-29.25 28.75-56 60.38-56 14.13 0 27.63 5.75 37.75 16.25l65.13 65.63c-6.27 6.92-11.67 14.82-16.07 23.32L144.1 480H64.58zm115.22 0 76.13-152.4C268.2 303.3 292.7 288 319.1 288c27.25 0 51.75 15.25 64.01 39.63L460.3 480H179.8zm316.1-.1-83.3-166.7c-4.377-8.625-9.872-16.5-16.12-23.5l65.13-65.63c10.13-10.38 23.63-16.25 37.75-16.25 31.63 0 60.38 26.75 60.38 56 0 26-4.5 21-22.38 57.88-11.88 24.5-11.88 53.5 0 78l37.88 80.13H495.9zM217.6 123.3c6.234-6.266 6.331-16.41.065-22.64C211.3 94.38 208 88.05 208 81.81 208 58.3 255.9 32 320 32s112 26.3 112 49.81c0 6.234-3.203 12.56-9.5 18.83-6.266 6.234-6.297 16.38-.063 22.64C425.6 126.4 429.7 128 433.8 128c4.078 0 8.156-1.547 11.28-4.656C457.5 111 464 96.66 464 81.81 464 35.94 400.8 0 320 0S176 35.94 176 81.81c0 14.84 6.547 29.2 18.94 41.53 6.26 6.26 16.46 6.26 22.66-.04z" />
  </svg>
);

const SvgAngel = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgAngel;
