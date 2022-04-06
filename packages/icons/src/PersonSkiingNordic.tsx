import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M344 112c30.88 0 56-25.12 56-56S374.9 0 344 0s-56 25.12-56 56 25.1 56 56 56zm0-80c13.23 0 24 10.77 24 24s-10.8 24-24 24-24-10.77-24-24 10.8-24 24-24zM156.7 183.1l31.36-31.36c13.16-13.14 32.89-17.56 50.38-11.16l1.422.518-94.98 284.1c-2.797 8.39 1.734 17.45 10.11 20.23C156.6 447.7 158.3 448 160 448c6.703 0 12.94-4.234 15.17-10.94l94.71-284.1 36.71 13.37c11.56 4.219 20.97 12.61 26.48 23.64l36.61 73.2C372.4 268.6 377.9 272 384 272h64c8.844 0 16-7.156 16-16s-7.2-16-16-16h-54.11l-32.19-64.36c-9.188-18.38-24.88-32.38-44.17-39.39L249.3 111.4c-29.1-10.6-62-3.3-83.9 18.6L134 161.4c-6.25 6.25-6.25 16.38 0 22.62s16.4 6.18 22.7-.92zm175.1 264.4c1.4.3 2.8.5 4.2.5 7.047 0 13.52-4.703 15.44-11.84l20.38-75.63a16.008 16.008 0 0 0-5.719-16.86l-68.38-52.38c-7.016-5.344-17.05-4.031-22.44 2.969C269.9 301.3 271.3 311.3 278.3 316.7l59.88 45.86-17.59 65.28c-2.29 8.56 2.71 17.36 11.21 19.66zm100.4-129.8-16 112c-1.25 8.75 4.828 16.86 13.58 18.11.72-.71 1.52.19 2.22.19 7.844 0 14.69-5.75 15.83-13.73l16-112c1.25-8.75-4.828-16.86-13.58-18.11-8.75-1.26-16.85 3.94-18.05 13.54zM76.13 447.5c1.29.3 2.6.5 3.89.5 7.172 0 13.69-4.844 15.5-12.12l48-192c2.156-8.562-3.062-17.25-11.64-19.39-8.58-2.29-17.28 3.01-19.38 11.61l-48 192c-2.17 8.6 3.05 17.3 11.63 19.4zM560 400c-8.844 0-16 7.156-16 16 0 35.3-28.7 64-64 64H16c-8.844 0-16 7.2-16 16s7.156 16 16 16h464c52.94 0 96-43.06 96-96 0-8.8-7.2-16-16-16z" />
  </svg>
);

const SvgPersonSkiingNordic = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgPersonSkiingNordic;