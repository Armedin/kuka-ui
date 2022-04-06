import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M623.1 0c9.7 0 16 7.164 16 16v88c0 8.8-6.3 16-16 16-7.9 0-16-7.2-16-16V54.63l-76.3 77.17c18.4 26.1 28.3 57.9 28.3 92.2 0 82.1-62.2 151.2-144 159.2V416h40c9.7 0 16 7.2 16 16s-6.3 16-16 16h-40v48c0 8.8-6.3 16-16 16-7.9 0-16-7.2-16-16v-48h-40c-7.9 0-16-7.2-16-16s8.1-16 16-16h40v-32.8c-80-8-144-77.1-144-159.2 0-88.4 72.5-160 160-160 43.4 0 82 16.57 110.7 43.6L585.4 32h-58.3c-7.9 0-16-7.16-16-16 0-8.836 8.1-16 16-16h96zm-224 96c-69.8 0-128 57.3-128 128s58.2 128 128 128c71.6 0 128-57.3 128-128s-56.4-128-128-128zm-224-88c7.1 0 12.8 3.64 15.4 9.32l32.1 69.84 59.5-14.7c-15.6 12.15-29.3 26.65-40.5 42.94l-24.1 6c-7.5 1.8-15.2-1.9-18.4-8.9l-24-50.19-22.2 50.19c-3.2 7-11.8 10.7-18.4 8.9l-53.64-13.3 24.84 49.4c3.5 6.9 1.6 15.2-4.5 19.9l-43.84 33.7 54.14 11.3c6.6.7 12.8 8.3 12.7 16l-1 55.2 42.6-35.2c5.9-4.9 14.5-4.9 20.4 0l31.5 26.1c7.2 21.6 18.1 41.6 32.1 59.1-5 .5-10.5.3-14.6-3.1l-60.1-49-58.3 49c-5.7 4-11.5 4.8-17.17 2.1-5.63-2.7-9.16-8.5-9.05-14.7l1.38-76.9-75.23-15.7c-6.12-2.2-10.93-6-12.32-12.1-1.391-6.1.893-12.5 5.85-16.3l60.95-46.8-34.59-68.66a15.986 15.986 0 0 1 1.77-17.17c3.9-4.89 10.29-7.06 16.35-5.56l74.66 18.45 32.1-69.84c2.6-5.68 8.2-9.321 13.6-9.321V8z" />
  </svg>
);

const SvgMarsAndVenusBurst = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgMarsAndVenusBurst;