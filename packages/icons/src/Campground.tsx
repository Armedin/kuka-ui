import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M394.3 3.745c6.8 5.68 7.6 15.775 2 22.545L308.9 130.4l223.9 266.8c7.2 8.6 11.2 19.5 11.2 30.8v36c0 26.5-21.5 48-48 48H80c-26.51 0-48-21.5-48-48v-36c0-11.3 3.98-22.2 11.23-30.8L267.1 130.4 179.7 26.29c-5.6-6.77-4.8-16.865 2-22.545 6.8-5.681 16.9-4.799 22.6 1.97l82.8 99.785 84.6-99.785c5.7-6.769 15.8-7.651 22.6-1.97zM64 428v36c0 8.8 7.16 16 16 16h49.9l145.5-185.9c3-3.8 7.7-6.1 12.6-6.1 4.9 0 9.6 2.3 12.6 6.1L446.1 480H496c8.8 0 16-7.2 16-16v-36c0-3.8-1.3-7.4-3.7-10.3L288 155.3 67.74 417.7C65.33 420.6 64 424.2 64 428zm106.6 52h234.8L288 329.1 170.6 480z" />
  </svg>
);

const SvgCampground = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCampground;
