import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="m200.9 116.2 32.3-99.6A23.96 23.96 0 0 1 256 .001c10.4 0 19.6 6.705 22.8 16.599l34.5 106.5 70.5-25.65c8.8-3.19 18.6-1.02 24.3 5.55 7.5 6.6 9.6 16.4 6.5 25.2l-25.7 70.5 106.5 34.5c9.9 3.2 16.6 12.4 16.6 22.8s-6.7 19.6-16.6 22.8l-103.1 33.4 52.9 100.6c4.9 9.3 3.2 20.7-5.1 27.3-6.6 8.3-18 10-27.3 5.1l-100.6-52.9-33.4 103.1c-3.2 9.9-12.4 16.6-22.8 16.6s-19.6-6.7-22.8-16.6l-33.4-103.1-100.63 52.9c-9.3 4.9-20.71 3.2-28.14-5.1-7.43-6.6-9.16-18-4.27-27.3l52.94-100.6-103.1-33.4A23.96 23.96 0 0 1 0 256c0-10.4 6.705-19.6 16.6-22.8l99.6-32.3L4.208 37.57C-2.33 28.04-1.143 15.2 7.03 7.03c8.17-8.174 21.01-9.36 30.54-2.822L200.9 116.2z" />
  </svg>
);

const SvgBurstSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgBurstSolid;
