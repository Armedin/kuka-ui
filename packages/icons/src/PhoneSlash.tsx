import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M131.1 480c-6.143 0-11.61-4.344-12.99-10.31l-21.8-94.47c-1.438-6.25 1.812-12.66 7.719-15.22l101.6-43.56c5.344-2.219 11.8-.719 15.5 3.844l41.39 50.5c4.703 5.75 12.8 7.531 19.44 4.219a341.771 341.771 0 0 0 48.61-29.19l-26.81-21.18c-8.117 5.473-16.08 11.18-24.7 15.87L245.9 300c-12.5-15.4-34.2-20.7-52.7-13.9L91.4 329.76c-.016.031.016 0 0 0-20.08 8.688-31.13 30.48-26.24 51.8l21.8 94.47C91.71 497.6 109.9 512 131.1 512 238 512 336.2 474.04 413 411l-25.95-20.49C316.7 446.3 227.8 480 131.1 480zm273.3-264.8c-3.25 5.971-7.363 11.38-10.99 17.11l25.65 20.26c7.203-11.13 14-22.53 19.88-34.46 3.281-6.672 1.531-14.72-4.219-19.44l-50.5-41.38c-4.578-3.781-6.109-10.03-3.75-15.55l43.58-101.7c2.141-4.938 7.018-8.031 12.25-8.031.984 0 1.984.11 2.984.344l94.41 21.91C539.8 55.64 544 60.94 544 67.12c0 84.72-25.72 163.5-69.66 229.1l25.22 19.92C547.8 245 576 159.3 576 67.12c0-21.22-14.47-39.34-35.17-44.06L446.44 1.15c-21.21-4.891-43.1 6.125-51.81 26.22l-43.61 101.8c-7.984 18.69-2.828 39.92 12.84 52.84l40.54 33.19zM638 488.3a15.954 15.954 0 0 0-4.111-4.855L25.9 3.234C23.25 1.148 20.09.324 16.95.133c-.59-.031-1.17-.156-1.76-.13-1.49.083-2.92.485-4.34.97-.68.234-1.393.324-2.039.648-2.01 1.012-3.883 2.383-5.375 4.254A15.994 15.994 0 0 0 .111 17.67c.24 2.04.87 4.027 1.87 5.852a16.003 16.003 0 0 0 4.11 4.852l608 480.2C617 510.9 620.5 512 624 512a15.974 15.974 0 0 0 15.884-17.868C639.6 492.1 639 490.1 638 488.3z" />
  </svg>
);

const SvgPhoneSlash = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgPhoneSlash;