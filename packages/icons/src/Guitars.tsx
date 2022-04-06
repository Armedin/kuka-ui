import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M144 180.3v-46.5l24.61-40.25c2-4 3.033-8.565 3.033-13.06V26.37C171.6 11.87 159.9 0 145.3 0h-34.5C96.17 0 84.3 11.91 84.3 26.41V80.5c0 4.5 1.098 8.947 3.098 12.95l24.64 40.36v46.54c-24.06 2.146-47.73 7.762-69.13 29.15-15.38 15.38-24.62 34.1-24.62 56.62 0 11.88 2.875 23.62 8.375 34.12 8 15.62 6 35.62-4.875 48.75-13.62 16.5-21.87 36.37-21.75 57.1-.125 58 57.37 105 127.1 105 25.78 0 49.57-6.478 69.6-17.34 7.277-3.945 9.754-13.03 6.225-20.52-.047-.098-.094-.195-.139-.293C199.9 465.8 190.2 462.8 182.4 467c-15.9 8.5-34.7 13-54.4 13-26.88 0-51.75-8.375-70.25-23.5C41.12 442.88 32 425.25 32 406.87c0-16.5 7.875-29.5 14.38-37.38 19.12-23 22.62-56.75 8.75-83.88-3.25-6.01-4.88-12.71-4.88-19.61 0-25.42 24.49-52.3 61.75-52.4v61.3c-18.6 6.7-32 24.2-32 45.1 0 26.5 21.5 48 48 48s48-21.5 48-48c0-20.86-13.41-38.45-32.01-45.06l.004-61.42c19.12-.053 34.28 5.824 47.3 19.42 6.306 6.56 16.606 6.76 22.906.16 6.646-7.062 5.869-16.33.555-21.95C189.8 184.7 159.4 181.7 144 180.3zM116.3 32h23.5v48.5L128 103.3l-11.7-22.8V32zM144 320c0 8.875-7.128 15.1-16 15.1s-16-6.2-16-15.1 7.125-16 16-16 16 7.1 16 16zm256 16h-64c-8.801 0-16 7.199-16 16 0 8.799 7.199 16 16 16h64c8.799 0 16-7.201 16-16 0-8.8-7.2-16-16-16zm0 64.1h-64c-8.801 0-16.01 7.136-16.01 15.94 0 8.799 7.199 15.1 15.1 15.1h64c8.799 0 15.1-7.201 15.1-15.1C416 407.3 408.8 400.1 400 400.1zm104.6-13.2-30.25-50.63c-7.5-20.38-11.62-29.5-2.25-49.25 5.125-10.88 7.875-22.75 7.875-34.75V221.3c0-9.719-6.273-18.78-15.73-21.04a21.593 21.593 0 0 0-5.021-.596c-7.752 0-14.88 4.248-18.5 11.25l-12 23.12c-6 11.62-12.12 19.75-24.75 22h-20V93.06c20.23-7.189 34.31-27.36 31.69-50.61C412.9 17.92 390.1 0 366.3 0c-20.75 0-38.7 14.38-43.2 34.63-7.5 33.75-17.9 80.87-19.2 86.77-2.4 10.6.9 21.7 8.6 29.5l39.5 31.5V256h-20c-12.75-3.5-18.5-14-23.12-26.88l-14.75-40.25C291.4 181.1 284 176 275.8 176c-5.25 0-10.25 2-14 5.75-3.625 3.75-5.75 8.75-5.75 13.88v56.63c0 12.12 2.625 24 7.875 34.88 9.25 19.62 5.375 28.75-2.125 49.25L231.4 387c-25.4 59.1 18 125 82.4 125h108.4c64.4-.1 107.8-65.9 82.4-125.1zM335.2 128c1.369-6.324 11.72-52.97 19.16-86.46 1.24-5.6 6.14-9.54 11.94-9.54 8.83 0 16.72 6.295 17.59 14.03.982 8.705-4.619 14.75-10.6 16.88a31.995 31.995 0 0 0-21.28 30.15v48.34L335.2 128zm135.2 325.9c-10.9 16.6-28.5 25.2-48.3 26.1H313.7c-19.72 0-37.26-9.449-48.12-25.93-10.5-15.94-12.5-35.03-5.588-52.66l29.15-48.57a32.037 32.037 0 0 0 2.613-5.471l.682-1.863c7.715-21.04 15-40.91.209-72.29a46.612 46.612 0 0 1-3.94-12.23c6.794 10.41 17.54 21.14 34.78 25.88C326.3 287.6 329.2 288 332 288h72c1.883 0 3.762-.166 5.615-.496 17.33-3.09 28.71-12.07 36.23-21.05a50.47 50.47 0 0 1-2.629 6.82c-14.75 31.08-7.492 50.71.195 71.5l.934 2.529a32.012 32.012 0 0 0 2.56 5.359l29.04 48.59C482.9 418.9 480.9 438 470.4 453.9z" />
  </svg>
);

const SvgGuitars = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgGuitars;