import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M287.1 32c-122.8 0-224 100.3-224 224s101.2 224 224 224c96.2 0 177.6-59.5 210-143.4 3.2-8.3 12.4-12.4 20.7-9.2 8.2 3.2 12.3 12.5 9.1 20.7-37.8 95-130 163.9-238.9 163.9-141.4 0-256-114.6-256-256S146.6 0 288 0c83.8 0 158.1 40.24 204.8 102.4 5.3 7 3.9 17.1-3.2 22.4-7.1 5.3-17.1 3.9-22.4-3.2C426.3 67.16 361.3 31.1 288 31.1l-.9.9zm115.4 364.1c-6.7 5.8-16.8 5.1-22.6-1.6-18.8-20.7-48.5-42.5-92.8-42.5-42.5 0-73.1 21.8-91 42.5-5.8 6.7-15.9 7.4-22.6 1.6-6.7-5.8-7.4-15.9-1.6-22.6 22.2-25.6 61-53.5 115.2-53.5 14.4 0 26 1.7 38.4 4.6l150.6-145.2c20.5-18.8 51.5-19.3 70.7.7 19.8 19 19.4 52.1-.9 71.4L407.1 382.9c1.2 4.8-.7 9.8-4.6 13.2zm-14.3-38.5 8.4-8.1-5.1-5c-4.7-4.7-4.7-12.3 0-17 4.7-4.7 12.3-4.7 17 0l4.6 4.6 16.3-13.8-5.9-5.8c-4.7-4.7-4.7-12.3 0-17 4.7-4.7 12.3-4.7 17 0l6.2 6.3 15.4-14.7-6.6-6.6c-4.7-4.7-4.7-12.3 0-17 4.7-4.7 12.3-4.7 17 0l7 7.1 15.4-14.7-7.4-7.4c-4.7-4.7-4.7-12.3 0-17 4.7-4.7 12.3-4.7 17 0l7.8 7.8 11.5-10.9c7.3-7 7.4-18.5.3-25.6-6.8-6.9-18-7-25-.3L358.5 337.2c11.3 6 21.2 13 29.7 20.4zM184.4 208c0-13.3 10.7-24 24-24 13.2 0 24 10.7 24 24s-10.8 24-24 24c-13.3 0-24-10.7-24-24zm208 0c0 13.3-10.8 24-24 24-13.3 0-24-10.7-24-24s10.7-24 24-24c13.2 0 24 10.7 24 24z" />
  </svg>
);

const SvgFaceThermometer = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgFaceThermometer;
