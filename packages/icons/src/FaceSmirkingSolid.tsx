import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M512 256c0 141.4-114.6 256-256 256S0 397.4 0 256 114.6 0 256 0s256 114.6 256 256zm-400-32h32c0 17.7 14.3 32 32 32s32-14.3 32-32-14.3-32-32-32h-64c-8.8 0-16 7.2-16 16s7.2 16 16 16zm263.8 114.6c1.4-8.7-4.5-16.9-13.2-18.4-8.7-1.4-16.9 4.5-18.4 13.2l-.2 1.2c-3.2 19.3-19.9 33.4-39.4 33.4H192c-8.8 0-16 7.2-16 16s7.2 16 16 16h112.6c35.2 0 65.2-25.4 71-60.2l.2-1.2zM304 224h32c0 17.7 14.3 32 32 32s32-14.3 32-32-14.3-32-32-32h-64c-8.8 0-16 7.2-16 16s7.2 16 16 16z" />
  </svg>
);

const SvgFaceSmirkingSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgFaceSmirkingSolid;
