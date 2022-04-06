import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M416 384H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.7-14.3-32-32-32zm0 64H32v-32h384v32zM52 352c8.07 0 14.88-6.008 15.88-14.02l20.99-167.9C91.87 146 112.3 128 136.5 128h175c24.21 0 44.63 18.02 47.63 42.05l20.99 167.9C381.1 345.1 387.9 352 396 352c9.623 0 17.07-8.438 15.88-17.98L390.9 166.1c-5.008-40.02-39.03-70.05-79.37-70.05h-175c-40.34 0-74.36 30.03-79.37 70.05L36.15 333.2C34.93 343.6 42.38 352 52 352zm76.2-178.4-24 160c-1.312 8.75 4.688 16.88 13.44 18.19.76.11 1.56.21 2.36.21 7.781 0 14.59-5.688 15.78-13.62l24-160c1.32-8.78-4.68-16.88-13.38-18.18-8.6-1.4-16.9 4.6-18.2 13.4z" />
  </svg>
);

const SvgSiren = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgSiren;
