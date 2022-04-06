import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M288 48c0-26.51 21.5-48 48-48h96c26.5 0 48 21.49 48 48v144h40v-72c0-13.3 10.7-24 24-24s24 10.7 24 24v72h24c26.5 0 48 21.5 48 48v224c0 26.5-21.5 48-48 48H336c-26.5 0-48-21.5-48-48V48zm64 64c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V80c0-8.84-7.2-16-16-16h-32c-8.8 0-16 7.16-16 16v32zm16 48c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16h-32zm-16 144c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v32zm176-48c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16h-32zm-16 144c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v32zM246.6 233.4c12.5 12.5 12.5 32.7 0 45.2l-80 80c-12.5 12.5-32.7 12.5-45.2 0s-12.5-32.7 0-45.2l25.3-25.4H32c-17.67 0-32-14.3-32-32s14.33-32 32-32h114.7l-25.3-25.4c-12.5-12.5-12.5-32.7 0-45.2s32.7-12.5 45.2 0l80 80z" />
  </svg>
);

const SvgArrowRightToCitySolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgArrowRightToCitySolid;