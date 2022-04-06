import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M57.89 397.2c-6.262-8.616-16.02-13.19-25.92-13.19-23.33 0-31.98 20.68-31.98 32.03 0 6.522 1.987 13.1 6.115 18.78l46.52 64C58.89 507.4 68.64 512 78.55 512c23.29 0 31.97-20.66 31.97-32.03 0-6.522-1.988-13.1-6.115-18.78L57.89 397.2zM496.1 352c-44.13 0-79.72 35.75-79.72 80s35.59 80 79.72 80 79.91-35.75 79.91-80-35.81-80-79.91-80zM640 99.38c0-13.61-4.133-27.34-12.72-39.2l-23.63-32.5C590.21 9.18 569.88 0 549.53 0c-13.89 0-27.79 4.281-39.51 12.8L307.8 159.7c-45.6 33.1-87.4 71.2-124.4 113.7-24.22 27.88-59.18 63.99-103.5 99.63l56.34 77.52c53.79-35.39 99.15-55.3 127.1-67.27 51.88-22 101.3-49.87 146.9-82.1l202.3-146.7C630.5 140.4 640 120 640 99.38z" />
  </svg>
);

const SvgBaseballBatBallSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgBaseballBatBallSolid;
