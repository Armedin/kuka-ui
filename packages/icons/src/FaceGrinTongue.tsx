import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M136.5 445.5c7.5 4.7 9.7 14.6 5 22.1-4.7 7.5-14.6 9.7-22 5C47.71 427.3 0 347.2 0 256 0 114.6 114.6 0 256 0s256 114.6 256 256c0 91.2-47.7 171.3-119.5 216.6-7.4 4.7-17.3 2.5-22-5-4.7-7.5-3.4-17.4 5-22.1C438.3 405.8 480 335.8 480 256c0-123.7-100.3-224-224-224S32 132.3 32 256c0 79.8 41.69 149.8 104.5 189.5zM152.4 208c0-13.3 10.7-24 24-24 13.2 0 24 10.7 24 24s-10.8 24-24 24c-13.3 0-24-10.7-24-24zm208 0c0 13.3-10.8 24-24 24-13.3 0-24-10.7-24-24s10.7-24 24-24c13.2 0 24 10.7 24 24zM256 512c-53.9 0-96-43-96-96v-32.7c-20.2-15.7-36.3-36.2-46.8-59.8-5.1-11.7 6.8-22.4 19.1-18.8 37.3 11.2 79.3 17.4 123.7 17.4 44.5 0 86.5-6.2 123.8-17.4 12.3-3.6 24.2 7.1 19.1 18.8-10.5 23.6-26.7 44.2-46.9 59.9V416c0 53-43 96-96 96zm64-96v-37.4c0-14.7-11.9-26.6-26.6-26.6h-2c-11.3 0-21.1 7.9-23.6 18.9-3.7 12.6-20.8 12.6-23.6 0-2.5-11-12.3-18.9-23.6-18.9h-2c-14.7 0-26.6 11.9-26.6 26.6V416c0 35.3 28.7 64 64 64s64-28.7 64-64z" />
  </svg>
);

const SvgFaceGrinTongue = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgFaceGrinTongue;
