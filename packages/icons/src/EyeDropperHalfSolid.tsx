import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M240.1 130.8 341.6 29.23c39-38.974 102.2-38.974 141.2 0 38.9 38.98 38.9 102.17 0 141.17L381.2 271.9l9.4 9.5c12.5 12.5 12.5 32.7 0 45.2s-32.7 12.5-45.2 0l-160-160c-12.5-12.5-12.5-32.7 0-45.2s32.7-12.5 45.2 0l9.5 9.4zm-18.7 117.1L149.3 320h85.4l29.4-29.4 45.3 45.3-120.7 120.7c-15 15-35.4 23.4-56.6 23.4H89.69l-39.94 26.6c-12.69 8.5-29.59 6.8-40.377-4-10.786-10.8-12.459-27.7-3.998-40.4L32 422.3v-42.4c0-21.2 8.43-41.6 23.43-56.6L176.1 202.6l45.3 45.3z" />
  </svg>
);

const SvgEyeDropperHalfSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgEyeDropperHalfSolid;
