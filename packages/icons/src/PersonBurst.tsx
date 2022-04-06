import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M535.1 56c0 30.93-24.2 56-56 56-30 0-56-25.07-56-56s26-56 56-56c31.8 0 56 25.07 56 56zm-56-24c-12.4 0-24 10.75-24 24s11.6 24 24 24c14.2 0 24-10.75 24-24s-9.8-24-24-24zm-48 480c-7.9 0-16-7.2-16-16V202.1l-49 93.4c-4.2 7.8-13.9 10.8-21.6 6.6-7.8-4.2-10.8-13.8-6.6-21.6l58.8-110.2c13.9-26 41.1-42.3 70.6-42.3h25.4c29.5 0 56.7 16.3 70.6 42.3l58.8 110.2c4.2 7.8 1.2 17.4-6.6 21.6-7.8 4.2-17.5 1.2-21.6-6.6L544 202.2V496c0 8.8-7.2 16-16 16s-16-7.2-16-16V352h-64.9v144c0 8.8-6.3 16-16 16zm36.2-352c-6.8 0-14.2 1.4-20.2 4v156H512V164c-6-2.6-12.5-4-19.3-4h-25.4zM222.6 87.16l74.6-18.45c6.1-1.5 12.5.67 16.4 5.56 3.9 4.88 4.6 11.59 1.8 17.17l-34.6 68.66 60.9 46.8c5 3.8 6.4 10.2 5.9 16.3-1.4 6.1-6.2 9.9-12.3 12.1L260 251l1.4 76.9c.1 6.2-4.3 12-9 14.7-5.7 2.7-12.4 1.9-17.2-2.1l-60.1-49-58.3 49c-5.7 4-11.5 4.8-17.17 2.1-5.63-2.7-9.16-8.5-9.05-14.7l1.38-76.9-75.23-15.7c-6.12-2.2-10.93-6-12.32-12.1-1.391-6.1.893-12.5 5.85-16.3l60.95-46.8-34.59-68.66a15.986 15.986 0 0 1 1.77-17.17c3.9-4.89 10.29-7.06 16.35-5.56l74.66 18.45 32.1-69.84c2.6-5.68 8.2-9.32 13.6-9.32 7.1 0 12.8 3.64 15.4 9.32l32.1 69.84zm-88.1 34.24-53.64-13.3 24.84 49.4c3.5 6.9 1.6 15.2-4.5 19.9l-43.84 33.7 54.14 11.3c6.6.7 12.8 8.3 12.7 16l-1 55.2 42.6-35.2c5.9-4.9 14.5-4.9 20.4 0l42.6 35.2-1-55.2c-.1-7.7 5.2-15.3 12.7-16l54.1-11.3-43.8-33.7c-6.1-4.7-8-13-4.5-19.9l24.8-49.4-53.6 13.3c-7.5 1.8-15.2-1.9-18.4-8.9l-24-50.19-22.2 50.19c-3.2 7-11.8 10.7-18.4 8.9z" />
  </svg>
);

const SvgPersonBurst = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgPersonBurst;