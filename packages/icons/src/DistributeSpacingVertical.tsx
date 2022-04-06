import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M512 464c0 8.8-7.2 16-16 16H16c-8.836 0-16-7.2-16-16s7.164-16 16-16h480c8.8 0 16 7.2 16 16zM144 352c-26.5 0-48-21.5-48-48v-96c0-26.5 21.5-48 48-48h224c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48H144zm0-32h224c8.8 0 16-7.2 16-16v-96c0-8.8-7.2-16-16-16H144c-8.8 0-16 7.2-16 16v96c0 8.8 7.2 16 16 16zM16 64C7.164 64 0 56.84 0 48s7.164-16 16-16h480c8.8 0 16 7.16 16 16s-7.2 16-16 16H16z" />
  </svg>
);

const SvgDistributeSpacingVertical = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgDistributeSpacingVertical;
