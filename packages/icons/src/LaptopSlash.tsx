import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M512 63.1c17.64 0 32 14.34 32 32V330l23.8 18.79c4.812-2.758 8.197-7.736 8.197-13.69v-240c0-35.28-28.7-64-64-64H165.4l40.53 32H512zm-448 384c-17.64 0-32-14.36-32-32h361.5l-40.53-32H16c-8.75 0-16 7.25-16 16v16c0 35.25 28.75 64 64 64l410.6-.003-40.53-32H64zm32-112v-154l-32-25.26v180.2c0 8.844 7.156 16 16 16s16-7.24 16-16.94zm537.9 148.3L25.92 3.42c-6.938-5.453-17-4.25-22.48 2.641-5.469 6.938-4.281 17 2.641 22.48l608 480C617 510.9 620.5 512 623.1 512c4.734 0 9.422-2.094 12.58-6.078C642 498.1 640.8 488.9 633.9 483.4z" />
  </svg>
);

const SvgLaptopSlash = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgLaptopSlash;
