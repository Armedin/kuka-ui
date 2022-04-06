import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M16 383.1c-8.75 0-16 7.25-16 16v16c0 35.25 28.75 64 64 64l425.6.9-122.5-96-351.1-.9zm48-236.7V352h64V196.6l-64-50.2zM639.1 400c0-8.75-7.25-16-16-16H521.3L154.8 96H512v256h63.1V80c0-26.38-21.62-48-48-48H112c-10.2 0-19.73 3.33-27.55 8.88L38.81 5.111A23.956 23.956 0 0 0 24.03 0C16.91 0 9.839 3.158 5.12 9.189c-8.188 10.44-6.37 25.53 4.068 33.7l591.1 463.1c10.5 8.203 25.57 6.328 33.69-4.078 8.188-10.44 6.37-25.53-4.068-33.7l-9.822-7.702C632.7 449.8 639.1 433.7 639.1 416v-16z" />
  </svg>
);

const SvgLaptopSlashSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgLaptopSlashSolid;
