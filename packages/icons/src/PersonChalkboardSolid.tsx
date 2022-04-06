import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M144 48c0-26.51 21.5-48 48-48s48 21.49 48 48-21.5 48-48 48-48-21.49-48-48zm8 464c-17.7 0-32-14.3-32-32V256.9l-28.57 47.6c-9.1 15.1-28.76 20-43.91 10.9-15.15-9.1-20.05-28.7-10.94-43.9l58.27-96.9C112.2 145.7 143.4 128 177.1 128H320V48c0-26.51 21.5-48 48-48h224c26.5 0 48 21.49 48 48v224c0 26.5-21.5 48-48 48H368c-26.5 0-48-21.5-48-48v-48h64v32h192V64H384v64h16c17.7 0 32 14.3 32 32s-14.3 32-32 32H264v288c0 17.7-14.3 32-32 32s-32-14.3-32-32V352h-16v128c0 17.7-14.3 32-32 32z" />
  </svg>
);

const SvgPersonChalkboardSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgPersonChalkboardSolid;