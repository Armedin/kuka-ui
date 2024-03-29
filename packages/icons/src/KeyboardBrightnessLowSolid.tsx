import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M224 160c0-17.7 14.3-32 32-32s32 14.3 32 32-14.3 32-32 32-32-14.3-32-32zM64 224c0-17.7 14.33-32 32-32 17.7 0 32 14.3 32 32s-14.3 32-32 32c-17.67 0-32-14.3-32-32zm384 0c0 17.7-14.3 32-32 32s-32-14.3-32-32 14.3-32 32-32 32 14.3 32 32zm0 160c0-17.7 14.3-32 32-32s32 14.3 32 32-14.3 32-32 32-32-14.3-32-32zm-384 0c0 17.7-14.33 32-32 32S0 401.7 0 384s14.33-32 32-32 32 14.3 32 32zm288-32c17.7 0 32 14.3 32 32s-14.3 32-32 32H160c-17.7 0-32-14.3-32-32s14.3-32 32-32h192z" />
  </svg>
);

const SvgKeyboardBrightnessLowSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgKeyboardBrightnessLowSolid;
