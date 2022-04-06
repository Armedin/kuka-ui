import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M223.5 32.2c28.3 1.48 49.4 26.82 49.4 55.09v201.8c0 8.873 7.191 16.06 16.06 16.06s16.06-7.191 16.06-16.06V87.29c0-28.27 21.17-53.61 49.4-55.09 30.11-1.576 55.01 22.37 55.01 52.13 0 1.555-.324 3.02-.457 4.539 23.26 5.484 40.62 26.25 40.62 51.18 0 7.609-1.684 14.8-4.584 21.33 20.03 2.893 36.27 17.07 42.16 35.91 2.113 6.768 8.123 11.53 15.21 11.53 10.7 0 18.49-10.38 15.36-20.61-5.963-19.5-18.78-36.24-36.03-46.92.006-.408.008-.82.008-1.232 0-30.85-16.42-58.3-41.97-73.15C431.7 28.73 397.8 0 357.3 0c-28.04 0-52.93 13.76-68.27 34.87C273.7 13.76 248.8 0 220.7 0c-40.5 0-74.4 28.73-82.5 66.9a84.323 84.323 0 0 0-41.67 65.92c-24.5 14.97-40.46 41.96-40.46 71.98 0 6.32.709 12.57 2.096 18.66C41.63 241.1 32 264.5 32 289.1c0 28.71 12.55 55.09 33.51 73.03a85.715 85.715 0 0 0-1.385 15.31c0 48.27 38.91 87.63 87.02 88.34 9.809 22.39 29.54 39.48 53.6 45.68 10.12 2.605 20.01-5.16 20.01-15.61 0-7.609-5.473-13.69-12.81-15.71-20.4-5.609-35.38-24.29-35.38-46.47 0-2.035.353-3.975.6-5.943-12.89 6.348-28.23 8.463-44.86 2.086-15.72-6.031-28.37-19.25-33.39-35.32-5.348-17.1-2.2-33.02 5.518-45.86-23.6-9.506-40.3-32.53-40.3-59.53 0-23.97 13.28-44.62 32.72-55.66C91.42 225.2 88.22 215.4 88.22 204.8c0-25.38 18.13-46.49 42.14-51.19-1.166-4.354-1.984-8.844-1.984-13.56 0-24.93 17.36-45.7 40.61-51.18-.086-1.52-.486-2.99-.486-4.54 0-29.76 24.9-53.71 55-52.13zm379.8 308.5-96-96c-6.25-6.25-16.38-6.25-22.63 0s-6.25 16.38 0 22.62L553.4 336H352c-44.11 0-80 35.88-80 80l-.002 79.9C271.1 504.7 279.2 512 288 512s16-7.156 16-16v-80c0-26.47 21.53-48 48-48h201.4l-68.69 68.69c-6.25 6.25-6.25 16.38 0 22.62 3.09 3.09 7.19 4.69 10.39 4.69s8.053-1.514 11.18-4.639l96.14-96.05c7.18-6.211 7.18-16.411.88-22.611z" />
  </svg>
);

const SvgBrainArrowCurvedRight = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgBrainArrowCurvedRight;
