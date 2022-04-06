import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="m341.1 1.611-128.6 31.88C200.8 37.74 192 49.99 192 63.99v312.1c-20.38-14.88-48.63-24.13-80-24.13-61.88 0-112 35.88-112 80S50.13 512 112 512s112-35.88 112-80V191.1l138.1-35.38c13-3.52 21.9-16.62 21.9-29.52V31.98c0-10.25-4.938-19.81-13.19-25.81C362.4.163 351.8-1.639 341.1 1.611zM112 479.1c-47.13 0-80-25.25-80-48S64.88 384 112 384s80 25.25 80 48-32.9 47.1-80 47.1zm240-352.9-128 32 .047-94.17-.547-.08L352 31.96v94.24z" />
  </svg>
);

const SvgMusicNote = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgMusicNote;
