import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" {...props}>
    <path d="M112 48c0-26.51 21.5-48 48-48s48 21.49 48 48-21.5 48-48 48-48-21.49-48-48zM88 382.1c-13.8-2.7-24-15.2-24-30.1v-55.1l-4.57 7.6c-9.1 15.1-28.76 20-43.91 10.9-15.15-9.1-20.051-28.7-10.947-43.9l58.277-96.9c14.99-25 40.35-41.6 68.65-46.5 4.1.2 8.3-.1 12.5-.1h16c1.4 0 2.8.1 4.1.3 35.7 2.9 65.4 29.3 72.1 65l6.1 32.4c44.3 8.6 77.7 47.5 77.7 94.3v32c0 17.7-14.3 32-32 32h-56v96c0 17.7-14.3 32-32 32s-32-14.3-32-32v-96h-16v96c0 17.7-14.3 32-32 32s-32-14.3-32-32v-97.9z" />
  </svg>
);

const SvgPersonPregnantSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgPersonPregnantSolid;
