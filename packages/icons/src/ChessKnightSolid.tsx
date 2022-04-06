import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="m19 272.5 40.62 18c4.16 1.8 8.63 2.8 13.1 2.8 4 0 8.001-.754 11.78-2.289l12.75-5.125c9.125-3.625 16-11.12 18.75-20.5l9.2-30.586c1.8-6.9 6.3-12.6 12.7-15.7L160 208v50.38c0 18.12-10.4 34.72-26.6 42.82l-57.15 28.7C49.12 343.5 32 371.1 32 401.5V416h319.9l-.042-192c0-105.1-85.83-192-191.8-192H12C5.375 32 0 37.38 0 44c0 2.625.625 5.25 1.75 7.625L16 80l-9 9c-4.5 4.5-7 10.62-7 17v137.2c0 12.7 7.5 24.2 19 29.3zM52 128c11 0 20 9 20 20s-9 20-20 20-20-9-20-20 9-20 20-20zm284 320H47.1C21.49 448 0 469.5 0 495.1c0 9.7 7.163 16.9 16 16.9h352c8.837 0 16-7.163 16-16 0-26.5-21.5-48-48-48z" />
  </svg>
);

const SvgChessKnightSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgChessKnightSolid;
