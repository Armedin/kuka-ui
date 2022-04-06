import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M352 96c0 14.3-3.1 27.9-8.8 40.2l52.8 91.2c-23.7 25.3-54.1 44.1-88.4 53.6L256 192h-.9l-67.2 117.5c21.5 6.8 44.4 10.5 68.1 10.5 70.7 0 133.8-32.7 174.9-84.9 11-12.9 31.2-16 45-4.1 13.8 11.1 16 31.2 4.9 45-52.7 65.8-134.7 108-224.8 108-35.4 0-69.4-6.4-100.7-18.1l-56.65 97.8c-4.7 8.1-11.68 14.7-20.07 18.9l-55.42 27.7c-4.96 2.5-10.85 2.2-15.572-.7C2.871 506.7 0 501.5 0 496v-55.4c0-8.4 2.228-16.7 6.46-24.1l60.03-103.6c-12.83-11.3-24.65-23.6-35.31-36.9-11.05-13.8-8.84-33.9 4.95-45 13.79-11.9 33.93-8.8 44.99 4.1 5.67 8 11.75 14.7 18.22 21l69.46-119.9c-5.7-12.3-8.8-25.9-8.8-40.2 0-53.02 42.1-96 96-96 53 0 96 42.98 96 96zm-96 32c17.7 0 32-14.3 32-32 0-17.67-14.3-32-32-32s-32 14.33-32 32c0 17.7 14.3 32 32 32zm116.1 265.9c33.4-12.8 63.4-30.7 89.7-52.9l43.7 75.5c4.3 7.4 6.5 15.7 6.5 24.1V496c0 5.5-2.9 10.7-7.6 13.6-4.7 2.9-10.6 3.2-15.6.7l-55.4-27.7c-8.4-4.2-15.3-10.8-20.1-18.9l-41.2-69.8z" />
  </svg>
);

const SvgCompassDraftingSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCompassDraftingSolid;
