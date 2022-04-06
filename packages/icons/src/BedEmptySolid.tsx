import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M640 320v144c0 8.836-7.164 16-16 16h-32c-8.836 0-16-7.164-16-16v-48H64v48c0 8.8-7.16 16-16 16H16c-8.836 0-16-7.2-16-16V48c0-8.84 7.164-16 16-16h32c8.84 0 16 7.16 16 16v176h480c53 0 96 42.1 96 96z" />
  </svg>
);

const SvgBedEmptySolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgBedEmptySolid;
