import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" {...props}>
    <path d="M285.1 145.7c-3.81 8.758-12.45 14.42-21.1 14.42l-72-.02V480c0 17.69-14.33 32-32 32s-32-14.31-32-32V160.1H55.1a23.986 23.986 0 0 1-22-14.42c-3.811-8.758-2.076-18.95 4.408-25.94l104-112.1c9.498-10.24 25.69-10.24 35.19 0l104 112.1c7.402 6.96 9.102 17.16 4.402 25.96z" />
  </svg>
);

const SvgUpLongSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgUpLongSolid;
