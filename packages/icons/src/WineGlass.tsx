import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" {...props}>
    <path d="M240 480h-64V349.8c76.68-8.744 134.6-77.24 127.4-157.2L288.74 29.1C287.3 12.62 273.7 0 257.3 0H62.66C46.35 0 32.73 12.62 31.25 29.1L16.6 192.6c-7.167 80 50.72 148.5 127.4 157.2V480H79.1c-8.836 0-16 7.162-16 16 0 8.836 7.164 16 16 16h160c8.836 0 16-7.164 16-16 .9-8.8-6.3-16-15.1-16zm16.9-448 8.6 96H54.33l8.328-96H256.9zM154.1 319.2c-30.4-1.6-58.24-15.3-78.34-38.5-20.41-23.6-30.1-53.8-27.29-85.2l3.08-35.5h216.8l3.182 35.51c2.809 31.34-6.881 61.58-27.28 85.14-20.11 23.22-47.92 36.91-78.32 38.56-7.332.39-4.432.39-11.832-.01z" />
  </svg>
);

const SvgWineGlass = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgWineGlass;
