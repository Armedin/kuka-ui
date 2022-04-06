import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M496 480h-16V320h-32v160H64V320H32v160H16c-8.836 0-16 7.2-16 16s7.164 16 16 16h480c8.836 0 16-7.164 16-16 0-8.8-7.2-16-16-16zM480 64c0-35.35-28.65-64-64-64H96C60.65 0 32 28.65 32 64v224h448V64zM240 256H64V64c0-17.67 14.33-32 32-32h144v224zm208 0H272V32h144c17.67 0 32 14.33 32 32v192z" />
  </svg>
);

const SvgWindowFrameOpen = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgWindowFrameOpen;
