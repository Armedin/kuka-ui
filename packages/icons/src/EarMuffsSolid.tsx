import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M151.1 224c-11 0-21.4 5.4-28.8 13.8-10.63-7-23.75-9.375-36.38-4.5-11.71 4.8-20.21 14.7-23.71 26.2-11.75-.2-23.37 4.8-31.62 14.4-8 9.9-10.63 22.1-8.38 33.6-10.13 5.125-18.44 14.86-20.94 26.98-3 12.25.189 23.89 7.314 33.27-7 9-10.15 20.91-7.649 33.16 2.875 12.25 10.77 21.84 21.27 27.34-2.5 11.12 0 23.62 8 33.25 8 9.875 19.88 14.75 31.75 14.75 3.25 11.5 11.5 21 23.38 26.12 5.125 1.875 9.875 2.875 15 2.875a39.77 39.77 0 0 0 22.13-6.75C129.7 506.8 140.2 512 151.1 512c22.13 0 40-17.88 40-40 0-9.999-4-18.88-10.13-25.88 6.125-7 10.13-15.88 10.13-25.88S188.5 401 182.3 394c6.2-7 8.8-16.1 8.8-25.9 0-9.875-3.51-18.81-9.635-25.81 6.125-7 9.625-16 9.625-26 0-10.12-4.125-19-10.25-26 6.125-7 10.25-16 10.25-26C191.1 241.9 174.1 224 151.1 224zM639 335.1c-2.875-12.25-10.81-21.84-21.31-26.97 2.5-11.5 0-24-8-33.63-8-9.875-19.88-14.75-31.75-14.75-3.25-11.5-11.5-21.38-23.38-26.12-12.75-5-26.13-2.5-36.88 4.5C510.5 229.8 499.1 224 487.8 224c-22.13 0-40 17.88-40 40 0 10.12 4.125 19 10.25 26-6.125 6.999-10.25 15.87-10.25 26.12 0 9.876 3.5 18.88 9.625 25.88-6.125 6.999-9.541 16.06-9.541 25.94 0 9.875 3.416 18.81 9.541 25.81-6.125 7-9.625 16-9.625 26 0 10.12 4.125 19 10.25 26-6.125 7-10.25 16-10.25 26 0 22.12 17.88 40 40 40 11.75 0 22-5.125 29.38-13.12 6.5 4.125 14 6.5 22 6.5 4.75 0 9.875-.625 14.63-2.875 11.88-4.5 20.25-14.5 23.38-26 11.88.375 23.75-4.75 32-14.38 8-9.875 10.63-22.12 8.375-33.63 10.13-5 18.1-14.61 21.1-26.86 2.875-12.12-.346-24.26-7.471-33.26C638.5 359.4 641.7 347.3 639 335.1zM487.8 192c12.26 0 24.23 3.279 34.84 9.336A71.6 71.6 0 0 1 540.72 199c.602 0 1.188.152 1.789.168C530.2 87.15 435.3 0 320 0 204.8 0 109.1 87.01 97.49 198.9c.719-.021 1.422-.197 2.143-.197 6.024 0 12.01.777 17.86 2.297 10.407-5.9 22.207-9 33.607-9 3.82 0 7.496.555 11.16 1.133C177.6 119.6 242.3 64 320 64c77.65 0 142.4 55.63 156.9 129.1 3.6-.5 7.2-1.1 10.9-1.1z" />
  </svg>
);

const SvgEarMuffsSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgEarMuffsSolid;