import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M80 160c-8.84 0-16-7.2-16-16C64 64.47 128.5 0 208 0h32c79.5 0 144 64.47 144 144 0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.86-50.1-112-112-112h-32C146.1 32 96 82.14 96 144c0 8.8-7.16 16-16 16zM0 208c0-8.8 7.164-16 16-16h416c8.8 0 16 7.2 16 16s-7.2 16-16 16h-12l-30.7 245.1c-3 24-23.5 42.9-47.7 42.9H106.4c-24.23 0-44.65-18.9-47.66-42.9L28 224H16c-8.836 0-16-7.2-16-16zm90.5 257.1c1 8 7.8 14.9 15.9 14.9h235.2c8.1 0 14.9-6.9 15.9-14.9L387.8 224H60.25L90.5 465.1z" />
  </svg>
);

const SvgBucket = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgBucket;
