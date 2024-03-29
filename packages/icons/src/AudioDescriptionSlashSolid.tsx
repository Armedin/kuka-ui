import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="m630.8 469.1-30.73-24.09c4.623-8.783 7.922-18.37 7.922-29.02L608 96c0-35.35-28.65-64-64-64H96c-6.645 0-12.96 1.176-18.96 3.073L38.81 5.111A23.956 23.956 0 0 0 24.03.001C16.905 0 9.84 3.156 5.12 9.188c-8.188 10.44-6.37 25.53 4.068 33.7l591.1 463.1c10.5 8.203 25.57 6.328 33.69-4.078C643.1 492.4 641.2 477.3 630.8 469.1zM464.2 338.5l-44.53-34.9c24.72-1.92 44.32-22.42 44.32-47.63 0-26.47-21.53-48-48-48h-32v67.66l-48-37.62V184c0-13.25 10.75-24 24-24h56c52.94 0 96 43.06 96 96 .01 35.3-19.29 65.8-47.79 82.5zm-157.5 11a23.85 23.85 0 0 1-10.69 2.531c-8.813 0-17.28-4.859-21.5-13.27l-9.367-18.73H182.8l-9.367 18.73C167.6 350.6 153.2 355.4 141.3 349.5c-11.88-5.938-16.69-20.34-10.75-32.2l42.49-84.97L32 121.8V416c0 35.35 28.65 64 64 64h393.1L314.5 343.2c-2.1 2.5-4.7 4.7-7.8 6.3zM202.8 280h31.05l-22.3-17.48L202.8 280z" />
  </svg>
);

const SvgAudioDescriptionSlashSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgAudioDescriptionSlashSolid;
