import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M406.2 160.2c-17.5-25.25-52.13-32-77.88-14.5l-36.38 25c-32.88 22.66-87.05 33.63-135.8 0l-36.38-25c-25.75-17.5-60.38-10.75-77.88 14.5-17.5 25.5-11 60.5 14.5 78l36.38 24.88c10.88 7.5 22.75 14.12 35.38 19.75v22.62L73.89 361.7c-19.25 17.75-23.5 46.38-10 69.25l38.25 56.13C112.3 502.5 129.9 512 148.7 512c10 0 19.78-2.75 28.4-7.75 13-7.75 52.25-40.5 2-96.5l18.38-11.62c17.5 6.072 40.47 4.379 53.09 0l18.38 11.62c-50.25 56-11 88.75 2 96.5A55.79 55.79 0 0 0 299.3 512c18.75 0 36.33-9.5 46.58-24.88l38.25-56.13c13.5-22.88 9.25-51.5-10-69.25l-54.25-56.25V282.9c12.63-5.625 24.5-12.25 35.38-19.75l36.38-24.88c25.56-17.57 32.06-52.57 14.56-78.07zM169.3 443.7c6.625 11.5 2.875 26.13-8.5 33-10.77 6.254-25.8 3.496-33-8.5l-36.5-53.5c-6-10.12-3.75-23.25 5.5-30.75l38.75-41.25c.75.875 27.55 28.51 36.88 37.88l-29.38 27.62 26.25 35.5zm82.7-85.1c-13.07 13.07-43.34 12.75-56.09 0l-35.88-35.88V303.1h127.8v18.75L252 358.6zm99.2 24.5c9.25 7.5 11.5 20.62 5.5 30.75l-36.5 53.5c-7.262 12.1-22.32 14.7-33 8.5-11.38-6.875-15.13-21.5-8.5-33l26.25-35.5-29.38-27.62c9.328-9.361 36.13-37 36.88-37.88l38.75 41.25zm22.3-171.4-36.38 25c-12.48 8.521-25.78 15.4-39.57 20.83-5.889 2.318-9.678 8.094-9.678 14.42H160.1c0-6.33-3.789-12.11-9.68-14.42-13.79-5.43-27.09-12.3-39.57-20.83l-36.38-25c-26.38-18.12 1.25-57.25 27.25-39.5l36.25 24.88c1.762 1.207 83.97 60.38 172.1 0l36.25-24.88c25.98-17.7 53.58 21.4 27.18 39.5zM224 159.1c44.21-.043 79.99-35.78 79.99-79.1C303.99 35.78 268.21.04 224 .9c-44.2-.857-80 34.87-80 78.2 0 45.1 35.8 80 80 80zM224 32c26.46.043 47.92 21.52 47.92 47.99 0 26.47-21.46 47.95-47.92 47.99-26.5-.08-47.9-21.48-47.9-47.99 0-26.47 21.4-47.95 47.9-47.99z" />
  </svg>
);

const SvgBaby = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgBaby;
