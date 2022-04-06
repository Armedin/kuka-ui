import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M638.8 216.8 553.1 10.7C550.8 4.429 544.2 0 538.3 0c-1.75 0-4.511.547-6.136 1.219l-117.3 48.61c-5.438 2.266-9.874 8.877-9.874 14.77 0 1.766.506 4.502 1.193 6.127l85.73 206.9c2.25 5.453 8.893 9.895 14.8 9.895 1.75 0 4.473-.535 6.098-1.206l117.3-48.61C635.6 235.5 640 228.9 640 222.1c0-.9-.6-3.6-1.2-5.3zM380.4 92.14 74.25 241.7c-8.35 4.1-12.26 12.4-9.04 21.1l8.753 21.13L9.878 310.4C4.44 312.7 0 319.3 0 325.2c0 1.75.563 4.499 1.219 6.124l20.06 48.42c2.25 5.453 8.876 9.876 14.78 9.876 1.75 0 4.497-.547 6.122-1.219L106.2 361.9l8.737 21.09c3.219 7.781 12.52 11.49 21.27 8.479l127-43.69c.168.217.356.482.526.697L217.4 479.1c-4.406 12.5 2.126 26.22 14.63 30.63 2.57 1.87 5.27 2.27 7.07 2.27 9.875 0 19.16-6.157 22.63-16l42.9-121.6c4.686.959 9.507 1.551 14.48 1.551s9.822-.504 14.51-1.463l42.87 121.5C380.8 505.8 390.1 512 399.1 512a23.95 23.95 0 0 0 8.001-1.375c12.5-4.406 19.03-18.13 14.63-30.63l-46.42-131.5c9.734-12.28 15.79-27.6 15.79-44.49 0-.13-.044-.24-.044-.371l66.58-22.87L380.4 92.14zM319.1 327.1c-13.23 0-24-10.77-24-24s10.77-24 24-24 24 10.77 24 24c0 14.1-9.9 24-24 24z" />
  </svg>
);

const SvgTelescopeSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgTelescopeSolid;